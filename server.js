import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { app } from "./app.js";

// Sergii     GeZ3SIUFrS09oG2P
// JWT_SECRET=fhfgjfgjgjtysdfcmnvlkdfg4w545pyp56t4679-0egdpogd9
// npm install mongoose --save
// npm i dotenv
// npm i jsonwebtoken
// npm i bcrypt

// npm install --save multer
// npm i gravatar
// npm i jimp



// echo "export SENDGRID_API_KEY='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'" > sendgrid.env
// echo "sendgrid.env" >> .gitignore
// source ./sendgrid.env

const DB_HOST =
  "mongodb+srv://Sergii:GeZ3SIUFrS09oG2P@cluster0.vvimffh.mongodb.net/db-contacts?retryWrites=true&w=majority";

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
