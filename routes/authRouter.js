import express from "express";
import {
  loginUserCtrl,
  logoutUserCtrl,
  registerUserCtrl,
} from "../controllers/user/index.js";

const usersRouter = express.Router();

usersRouter
  .post("/register", registerUserCtrl)
  .post("/login", loginUserCtrl)
  .post("/logout", logoutUserCtrl)
  .post("/current", currentUserCtrl);

export default usersRouter;
