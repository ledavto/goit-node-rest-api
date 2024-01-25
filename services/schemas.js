import { Schema, model } from "mongoose";

const contact = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

export const Contact = model("contact", contact);
