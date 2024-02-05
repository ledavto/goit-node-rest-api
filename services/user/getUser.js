import { User } from "../../models/userSchema.js";

const getUserSrv = async (id) => User.findById(id);

async function currentUserSrv( token ) {
  //Повертає об'єкт доданого юзера (з id).
  try {
    const user = await User.findOne({ token });
    if (!user) throw HttpError(401, "User data not found");

    return user;
  } catch (error) {}
}

export { getUserSrv, currentUserSrv };
