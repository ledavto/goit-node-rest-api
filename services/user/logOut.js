import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/userSchema.js";
import { signToken } from "./jwtServices.js";

async function logoutUserSrv({ id }) {
  //Повертає об'єкт доданого юзера (з id).
  const user = await User.findOne({ id });
  if (!user) throw HttpError(401, "User data not found");

  user.token = null;

  //Очищаем в базе значение ТОКЕНА для пользователя
  const userMod = await User.findByIdAndUpdate(user.id, user);

  //   const isPasswordValidate = await user.checkPassword(password, user.password);

  //   if (!isPasswordValidate) throw HttpError(401, "Email or password is wrong");

  //   user.password = undefined;

  //   const token = signToken(user.id);

  //   return { user, token };
  return userMod;
}

export { logoutUserSrv };
