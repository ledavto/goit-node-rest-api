import { HttpError } from "../helpers/index.js";
import { checkToken, getUserSrv } from "../services/user/index.js";

const protect = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];

    if (!token) throw HttpError("401", "Not authorized");

    const userId = checkToken(token);

    if (!userId) throw HttpError("401", "Not authorized");

    const currentUser = await getUserSrv(userId);

    if (!currentUser) throw HttpError("401", "Not authorized");

    next();
  } catch (error) {
    next(error);
  }
};

export { protect };
