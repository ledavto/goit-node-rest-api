import express from "express";
import {
  currentUserCtrl,
  loginUserCtrl,
  logoutUserCtrl,
  registerUserCtrl,
} from "../controllers/user/index.js";
import { protect } from "../middlewares/index.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", registerUserCtrl)
  .post("/login", loginUserCtrl)
  .post("/logout", logoutUserCtrl)
  .get("/current", protect, currentUserCtrl);

export default usersRouter;
