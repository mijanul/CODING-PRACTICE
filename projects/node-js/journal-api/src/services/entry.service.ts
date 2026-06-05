import { ObjectId } from "mongodb";
import { getDB } from "../config/db";
import { JournalEntry, JournalEntryReq } from "../interfaces/JournalEntry";

function getCollection() {
  return getDB().collection("entries");
}

async function getEntries(tag?: string) {
  const filter = tag ? { tags: tag } : {};
  return getCollection().find(filter).toArray();
}

async function getEntry(id: string) {
  return getCollection().findOne({ _id: new ObjectId(id) });
}

async function createEntry(data: JournalEntry) {
  return getCollection().insertOne(data);
}

async function updateEntry(
  id: string,
  userId: string,
  role: string,
  data: Partial<JournalEntryReq>,
) {
  const filter =
    role === "ADMIN"
      ? { _id: new ObjectId(id) }
      : { _id: new ObjectId(id), userId: new ObjectId(userId) };

  return getCollection().updateOne(filter, {
    $set: data,
  });
}

async function deleteEntry(id: string, userId: string, role: string) {
  const filter =
    role === "ADMIN"
      ? { _id: new ObjectId(id) }
      : { _id: new ObjectId(id), userId: new ObjectId(userId) };

  const result = await getCollection().deleteOne(filter);
  return result.deletedCount === 1;
}

export { getEntries, getEntry, createEntry, updateEntry, deleteEntry };

// schema check - JOI
// error checks

// SQS - AWS CONCEPT
