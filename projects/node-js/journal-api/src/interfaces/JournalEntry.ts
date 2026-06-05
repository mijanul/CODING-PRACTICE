import { ObjectId } from "mongodb";

export interface JournalEntryReq {
  title: string;

  content: string;

  tags?: string[];
}
export interface JournalEntry extends JournalEntryReq {
  _id?: ObjectId;

  date: Date;

  userId: ObjectId;
}
