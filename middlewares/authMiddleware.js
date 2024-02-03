// export const checkSingUpData = async (req, res, next) => {};

import { HttpError } from "../helpers/index.js";
import { checkToken, getUserSrv } from "../services/user/index.js";

const protect = async (req, res, next) => {
  const token =
    req.headers.authorization?.startsWith("Bearer ") &&
    req.headers.authorization.split(" ")[1];
  
  console.log(token);
  ``
  if (!token) throw HttpError("401", "Not authorized");


  const userId = checkToken(token);

  if (!userId) throw HttpError("401", "Not authorized");

  const currentUser = await getUserSrv(userId);

    if (!currentUser) throw HttpError("401", "Not authorized");

    req.user = currentUser; // Чтобы в других мидлварах иметь данные Юзера

  next();
};

export { protect };
