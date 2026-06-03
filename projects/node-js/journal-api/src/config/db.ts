import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);

async function connectDB() {
  await client.connect();

  console.log("Database connected");

  return client.db(process.env.DB_NAME);
}
