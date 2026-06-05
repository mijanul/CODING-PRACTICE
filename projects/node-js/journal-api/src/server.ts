import express from "express";
import entryRoutes from "./routes/entry.routes";

const app = express();

app.use(express.json());

app.use("/api/v1/entries", entryRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
