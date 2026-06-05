import { Router } from "express";

import {
  getAll,
  getOne,
  create,
  updateOne,
  deleteOne,
} from "../controllers/entry.controller";

import { validate } from "../middleware/validate";
import {
  createEntrySchema,
  updateEntrySchema,
} from "../validators/entry.validators";

const router = Router();

router.route("/").get(getAll).post(validate(createEntrySchema), create);

router
  .route("/:id")
  .get(getOne)
  .patch(validate(updateEntrySchema), updateOne)
  .delete(deleteOne);

export default router;
