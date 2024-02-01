import { User } from "../../models/userSchema.js";
import { signToken } from "./jwtServices.js";

async function loginUserSrv({ email, password }) {
  //Повертає об'єкт доданого юзера (з id).
  const user = await User.findOne({ email });
  if (!user) throw new HttpError(401, "Not authorized");

  const isPasswordValidate = await user.checkPassword(password, user.password);

  if (!isPasswordValidate) throw new HttpError(401, "Not authorized");

  user.password = undefined;

  const token = signToken(user.id);

  return { user, token };
}

export { loginUserSrv };
