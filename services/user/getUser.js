import { User } from "../../models/userSchema.js";

const getUserSrv = async (id) => User.findById(id);

async function currentUserSrv({ token }) {
  //Повертає об'єкт доданого юзера (з id).
  //   const user = await User.findOne({ token });
  //   if (!user) throw HttpError(401, "User data not found");
  //   const isPasswordValidate = await user.checkPassword(password, user.password);
  //   if (!isPasswordValidate) throw HttpError(401, "Email or password is wrong");
  //   user.password = undefined;
  //   const token = signToken(user.id);
  //   user.token = token;
  //   //Добавляем в базу значение ТОКЕНА для пользователя который логинится
  //   await User.findByIdAndUpdate(user.id, user);
  //   return { user };
}

export { getUserSrv, currentUserSrv };
