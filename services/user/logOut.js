import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/userSchema.js";

async function logoutUserSrv({ id }) {
  //Повертає об'єкт доданого юзера (з id).
  const user = await User.findOne({ id });
  if (!user) throw HttpError(401, "User data not found");

  user.token = null;

  //Очищаем в базе значение ТОКЕНА для пользователя
  const userMod = await User.findByIdAndUpdate(user.id, user);

  return userMod;
}

export { logoutUserSrv };
