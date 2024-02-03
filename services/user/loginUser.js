import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/userSchema.js";
import { signToken } from "./jwtServices.js";

async function loginUserSrv({ email, password }) {
  //Повертає об'єкт доданого юзера (з id).
  const user = await User.findOne({ email });
  if (!user) throw HttpError(401, "Email or password is wrong");

  const isPasswordValidate = await user.checkPassword(password, user.password);

  if (!isPasswordValidate) throw HttpError(401, "Email or password is wrong");

  user.password = undefined;

  const token = signToken(user.id);
  user.token = token;

  //Добавляем в базу значение ТОКЕНА для пользователя который логинится
  await User.findByIdAndUpdate(user.id, user);

  return { user, token };
}

export { loginUserSrv };
