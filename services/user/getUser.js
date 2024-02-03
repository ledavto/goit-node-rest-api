import { User } from "../../models/userSchema.js";

const getUserSrv = async (id) => User.findById(id);

async function currentUserSrv({ token }) {
  //Повертає об'єкт доданого юзера (з id).

  const user = await User.findOne({token});
  if (!user) throw HttpError(401, "User data not found");
  
  return user;
}

export { getUserSrv, currentUserSrv };
