import { Schema, model } from "mongoose";
import Joi from "joi";

const contact = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

//Для обработки ошибок валидации схемы
contact.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

//Валидация входных данных
export const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  owner: Joi.string(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});

export const Contact = model("contact", contact);
