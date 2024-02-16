import express from "express";
import {
  currentUserCtrl,
  editAvatar,
  loginUserCtrl,
  logoutUserCtrl,
  registerUserCtrl,
  verifyUserEmailCtrl,
} from "../controllers/user/index.js";
import { protect, uploadAvatar } from "../middlewares/index.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", registerUserCtrl)
  .post("/login", loginUserCtrl)
  .post("/logout", logoutUserCtrl)
  .get("/current", protect, currentUserCtrl)
  .patch("/avatars", protect, uploadAvatar, editAvatar)
  .get("/verify/:verificationToken", verifyUserEmailCtrl);

export default usersRouter;
