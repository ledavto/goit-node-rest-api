import { Schema, model } from "mongoose";
import Joi from "joi";

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  subscription: {
    type: String,
    enum: ["starter", "pro", "business"],
    default: "starter",
  },
  token: String,
});

//Для обработки ошибок валидации схемы
userSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const schema = { registerSchema, loginSchema };

const User = model("user", userSchema);

export { User, schema };
