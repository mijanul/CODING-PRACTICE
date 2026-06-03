import { ObjectId } from "mongodb";
import { getDB } from "../config/db";
import { JournalEntry } from "../interfaces/JournalEntry";

const collection = getDB().collection("entries");

async function getEntries() {
  return collection.find().toArray();
}

async function getEntry(id: string) {
  return collection.findOne({ _id: new ObjectId(id) });
}

async function createEntry(data: JournalEntry) {
  return collection.insertOne(data);
}

async function updateEntry(id: string, data: JournalEntry) {
  return collection.updateOne({ _id: new ObjectId(id) }, { $set: data });
}

async function deleteEntry(id: string) {
  return collection.deleteOne({ _id: new ObjectId(id) });
}

export { getEntries, getEntry, createEntry, updateEntry, deleteEntry };
