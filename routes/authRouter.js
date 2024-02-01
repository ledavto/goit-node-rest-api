import express from "express";
import {
  loginUserCtrl,
  logoutUserCtrl,
  registerUserCtrl,
} from "../controllers/user/index.js";

const usersRouter = express.Router();

usersRouter.post("/register", registerUserCtrl);
usersRouter.post("/login", loginUserCtrl);
usersRouter.post("/logout", logoutUserCtrl);

export default usersRouter;
