import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import { currentUserSrv} from "../../services/user/index.js";

const currentUserCtrl = async (req, res, next) => {
  try {
    
    console.log("======", req.user);
    const { email, subscription } = await currentUserSrv(req.user);

    res.status(200).json({
      email,
      subscription
    });
  } catch (error) {
    next(error);
  }
};

export { currentUserCtrl };
