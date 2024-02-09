import { addUserSrv } from "./addUser.js";
import { signToken, checkToken } from "./jwtServices.js";
import { loginUserSrv } from "./loginUser.js";
import { getUserSrv } from "./getUser.js";
import { logoutUserSrv } from "./logOut.js";
import { currentUserSrv } from "./getUser.js";
import { editAvatarSrv } from "./editAvatar.js";

export {
  addUserSrv,
  signToken,
  checkToken,
  loginUserSrv,
  getUserSrv,
  logoutUserSrv,
  currentUserSrv,
  editAvatarSrv,
};
