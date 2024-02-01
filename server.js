import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { app } from "./app.js";

// Sergii     GeZ3SIUFrS09oG2P
// npm install mongoose --save
// npm i dotenv
// npm i jsonwebtoken
// npm i bcrypt

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
