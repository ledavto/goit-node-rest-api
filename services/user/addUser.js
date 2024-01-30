import { User } from "../../models/userSchema.js";

async function addUser(body) {
  //Повертає об'єкт доданого юзера (з id).
  const resAddDb = await User.create(body);
  return resAddDb;
}

export { addUser };
