import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import entryRoutes from "./routes/entry.routes";
import authRoutes from "./routes/auth.routes";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/entries", entryRoutes);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

const start = async () => {
  try {
    await connectDB();
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

start();
