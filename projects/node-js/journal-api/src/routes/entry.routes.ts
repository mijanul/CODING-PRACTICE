import { Router } from "express";

import {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
} from "../controllers/entry.controller";
import { auth } from "../middleware/auth.middleware";
import { validate } from "../middleware/validate";
import {
  createEntrySchema,
  updateEntrySchema,
} from "../validators/entry.validators";

const router = Router();

router.route("/").get(getAll).post(auth, validate(createEntrySchema), create);

router
  .route("/:id")
  .get(getOne)
  .put(auth, validate(updateEntrySchema), updateOne)
  .delete(auth, deleteOne);

export default router;
