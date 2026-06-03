import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.MONGO_URI!);

let db: Db;

async function connectDB() {
  await client.connect();

  console.log("Database connected");

  db = client.db(process.env.DB_NAME);
}

function getDB() {
  if (!db) {
    throw new Error("DB isn't connected");
  }
  return db;
}

export { getDB, connectDB };
