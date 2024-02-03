import { User } from "../../models/userSchema.js";
import { signToken } from "./jwtServices.js";

async function addUserSrv(userData) {
  //Повертає об'єкт доданого юзера (з id).
  const resAddDb = await User.create(userData);

  // //Получаем токен
  // const token = signToken(userData.id);

  return resAddDb ;
}

export { addUserSrv };
