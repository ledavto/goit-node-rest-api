import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { app } from "./app.js";
import dotenv from "dotenv";

// Sergii     GeZ3SIUFrS09oG2P
// npm install mongoose --save
// npm i dotenv
// npm i jsonwebtoken
// npm i bcrypt

// npm install --save multer
// npm i gravatar
// npm i jimp

//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;

//npm i @sendgrid/mail

dotenv.config();
const { DB_HOST } = process.env; // Из файла .env

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Server is running. Use our API on port: 3000");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
