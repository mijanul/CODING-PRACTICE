import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import pLimit from "p-limit";
import * as dotenv from "dotenv";
import * as https from "https";

dotenv.config();

interface MockPhoto {
  id: number;
  title: string;
  url: string;
}

const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: 25,
});

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

async function retryTask<T>(
  taskFn: () => Promise<T>,
  retries = 3,
  delay = 300,
): Promise<T> {
  try {
    return await taskFn();
  } catch (error) {
    if (retries <= 0) throw error;
    await new Promise((resolve) => setTimeout(resolve, delay));
    return retryTask(taskFn, retries - 1, delay * 2);
  }
}

async function downloadAndUploadToS3(photo: MockPhoto): Promise<void> {
  let buffer: Buffer;

  // 1. Parse the JSONPlaceholder URL to extract size and hex color
  // Example original: "https://via.placeholder.com/600/92c952"
  const urlParts = photo.url.split("/");
  const size = urlParts[3] || "600"; // Extracts "600"
  const hexColor = urlParts[4] || "777"; // Extracts "92c952"

  // 2. Reconstruct it using the correct placehold.co API structure
  const cleanUrl = `https://placehold.co/${size}x${size}/${hexColor}/FFFFFF.png`;

  // Step 1: Download the image with browser headers
  await retryTask(async () => {
    try {
      const response = await axios.get(cleanUrl, {
        responseType: "arraybuffer",
        httpsAgent,
        timeout: 10000,
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        },
      });
      buffer = Buffer.from(response.data);
    } catch (err: any) {
      throw new Error(
        `[Axios Download Error] ${err.message} (Target URL: ${cleanUrl})`,
      );
    }
  });

  // Step 2: Upload to S3
  await retryTask(async () => {
    try {
      const s3Key = `images/photo-${photo.id}.png`;
      const uploadCommand = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME,
        Key: s3Key,
        Body: buffer,
        ContentType: "image/png",
      });
      await s3Client.send(uploadCommand);
    } catch (err: any) {
      throw new Error(`[S3 Upload Error] ${err.message}`);
    }
  });

  console.log(`✅ Successfully processed: ${photo.id}`);
}

async function runPipeline() {
  const CONCURRENCY_LIMIT = 15;
  const limit = pLimit(CONCURRENCY_LIMIT);

  console.log("Fetching photo metadata from mock API...");

  try {
    const apiResponse = await axios.get<MockPhoto[]>(
      "https://jsonplaceholder.typicode.com/photos",
      { httpsAgent },
    );
    const photosToProcess = apiResponse.data.slice(0, 500);

    console.log(
      `Starting resilient pipeline for ${photosToProcess.length} images...`,
    );
    const startTime = Date.now();

    const tasks = photosToProcess.map((photo) => {
      return limit(async () => {
        try {
          await downloadAndUploadToS3(photo);
        } catch (error: any) {
          console.error(
            `❌ CRITICAL FAILURE on photo ID ${photo.id}:`,
            error.message,
          );
        }
      });
    });

    await Promise.all(tasks);

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(
      `\n--- Pipeline Complete! Processed 500 items in ${duration} seconds ---`,
    );
  } catch (error) {
    console.error("Critical error in pipeline execution:", error);
  }
}

runPipeline();
