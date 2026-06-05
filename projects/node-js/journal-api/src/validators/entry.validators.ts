import Joi from "joi";

export const createEntrySchema = Joi.object({
  title: Joi.string().trim().min(3).max(100).required(),

  content: Joi.string().trim().required(),

  tags: Joi.array().items(Joi.string()).default([]),
});

export const updateEntrySchema = Joi.object({
  title: Joi.string().trim().min(3).max(100),

  content: Joi.string().trim(),

  tags: Joi.array().items(Joi.string()),
}).min(1);
