import { Schema, model } from "mongoose";
import Joi from "joi";
import { compare, genSalt, hash } from "bcrypt";

const userSchema = new Schema(
  {
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
    token: { type: String },
    avatarURL: { type: String },
  },
  { versionKey: false, timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await genSalt(10);
  this.password = await hash(this.password, salt);

  next();
});

//Для обработки ошибок валидации схемы
userSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

userSchema.methods.checkPassword = (candidate, passwordHash) =>
  compare(candidate, passwordHash);

const registerSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  token: Joi.string(),
});

const schema = { registerSchema, loginSchema };

const User = model("user", userSchema);

export { User, schema };
