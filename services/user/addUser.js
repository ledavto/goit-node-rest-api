import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/userSchema.js";
import { signToken } from "./jwtServices.js";
import gravatar from "gravatar";

async function addUserSrv(userData) {
  const urlAva = gravatar.url(userData.email, {
    s: "200",
    r: "pg",
    d: "404",
  });
  userData.avatarURL = gravatar.url(urlAva);
  
  //Повертає об'єкт доданого юзера (з id).
  const resAddDb = await User.create(userData);

  return resAddDb;
}

async function reSendEmailSrv(email) {
  const user = await User.findOne({ email });
  
  if (!user) throw HttpError(401, "User not found");

  return user;
}

export { addUserSrv, reSendEmailSrv };
