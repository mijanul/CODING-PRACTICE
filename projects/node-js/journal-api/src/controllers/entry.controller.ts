import { Request, Response } from "express";

import {
  getEntries,
  getEntry,
  createEntry,
  updateEntry,
  deleteEntry,
} from "../services/entry.service";
import { ObjectId } from "mongodb";
import { EntryParams } from "../interfaces/Common";
import { JournalEntry, JournalEntryReq } from "../interfaces/JournalEntry";

const getAll = async (req: Request, res: Response) => {
  try {
    const entries = await getEntries();
    res.json(entries);
  } catch {
    res.status(500).json({ message: "Failed to get all entries" });
  }
};

const getOne = async (req: Request<EntryParams>, res: Response) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  try {
    const entry = await getEntry(id);
    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }
    res.json(entry);
  } catch {
    res.status(400).json({ message: "Invalid Id" });
  }
};

const updateOne = async (
  req: Request<EntryParams, {}, JournalEntryReq>,
  res: Response,
) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  try {
    const { title, content, tags } = req.body;

    if (!title && !content && !tags) {
      return res.status(400).json({
        message: "At least one field is required to update",
      });
    }

    const data: JournalEntry = {
      title,
      content,
      tags: tags ?? [],
      date: new Date(),
    };

    const updatedEntry = await updateEntry(id, data);

    if (!updatedEntry) {
      return res.status(404).json({
        message: "Entry not found",
      });
    }

    res.json(updatedEntry);
  } catch {
    res.status(500).json({
      message: "Failed to update entry",
    });
  }
};

const deleteOne = async (req: Request<EntryParams>, res: Response) => {
  const id = req.params.id;

  if (!ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid Id",
    });
  }

  try {
    const deletedEntry = await deleteEntry(id);

    if (!deletedEntry) {
      return res.status(404).json({
        message: "Entry not found",
      });
    }

    res.status(204).send();
  } catch {
    res.status(500).json({
      message: "Failed to delete entry",
    });
  }
};

const create = async (req: Request<{}, {}, JournalEntryReq>, res: Response) => {
  try {
    const { title, content, tags } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: "Title and Content is required" });
    }
    const result = await createEntry({
      title,
      content,
      date: new Date(),
      tags: tags ?? [],
    });

    res.status(201).json(result);
  } catch {
    res.status(500).json({ message: "Failed to create entry" });
  }
};

export { getAll, getOne, updateOne, deleteOne, create };
