import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import { currentUserSrv } from "../../services/user/index.js";

const currentUserCtrl = async (req, res, next) => {
  try {
     const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];

    const { email, subscription } = await currentUserSrv(token);

    res.status(200).json({
      email,
      subscription,
    });
  } catch (error) {
    next(error);
  }
};

export { currentUserCtrl };
