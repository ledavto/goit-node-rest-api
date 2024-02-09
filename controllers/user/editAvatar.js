import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import { editAvatarSrv } from "../../services/user/index.js";

const editAvatar = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];

    const { avatarURL } = await editAvatarSrv(token, req.file);

    res.status(200).json({
      avatarURL,
    });
  } catch (error) {
    next(error);
  }
};

export { editAvatar };
