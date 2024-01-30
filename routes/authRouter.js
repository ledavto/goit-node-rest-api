import express from "express";
import { User, schema } from "../models/userSchema.js";
import { registerUser } from "../controllers/user/index.js";

const usersRouter = express.Router();

usersRouter.post("/register", registerUser);

export default usersRouter;
