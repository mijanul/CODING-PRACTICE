import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import axios from "axios";
import pLimit from "p-limit";
import * as dotenv from "dotenv";

dotenv.config();

// Interfaces for our data
interface MockPhoto {
  id: number;
  title: string;
  url: string;
}

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

async function downloadAndUploadToS3(photo: MockPhoto): Promise<void> {
  try {
    const response = await axios.get(photo.url, {
      responseType: "arraybuffer",
    });
    const buffer = Buffer.from(response.data);

    const s3Key = `images/photo-${photo.id}.png`;

    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET_NAME,
      Key: s3Key,
      Body: buffer,
      ContentType: "image/png",
    });

    await s3Client.send(uploadCommand);
    console.log(`Successfully processed: ${photo.id} -> ${s3Key}`);
  } catch (error: any) {
    console.error(`Failed to process photo ID ${photo.id}:`, error.message);
  }
}

async function runPipeline() {
  const CONCURRENCY_LIMIT = 15;
  const limit = pLimit(CONCURRENCY_LIMIT);

  console.log("Fetching photo metadata from mock API...");

  try {
    const apiResponse = await axios.get<MockPhoto[]>(
      "https://jsonplaceholder.typicode.com/photos",
    );
    const photosToProcess = apiResponse.data.slice(0, 500);

    console.log(
      `Starting pipeline for ${photosToProcess.length} images with a concurrency limit of ${CONCURRENCY_LIMIT}...`,
    );
    const startTime = Date.now();

    const tasks = photosToProcess.map((photo) => {
      return limit(() => downloadAndUploadToS3(photo));
    });

    await Promise.all(tasks);

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(
      `--- Pipeline Complete! Processed 500 items in ${duration} seconds ---`,
    );
  } catch (error) {
    console.error("Critical error in pipeline execution:", error);
  }
}

runPipeline();
