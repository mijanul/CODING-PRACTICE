import { MongoClient, Db } from "mongodb";

let client: MongoClient | null = null;
let db: Db | null = null;

async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("MONGO_URI is not set in environment");
  }

  client = new MongoClient(uri);
  await client.connect();

  console.log("Database connected");

  db = client.db(process.env.DB_NAME || "test");
}

function getDB() {
  if (!db) {
    throw new Error("DB isn't connected");
  }
  return db;
}

export { getDB, connectDB };
