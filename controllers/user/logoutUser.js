import { HttpError } from "../../helpers/index.js";
import { logoutUserSrv } from "../../services/user/index.js";

const logoutUserCtrl = async (req, res, next) => {
  try {
    const user = await logoutUserSrv(req.body);

    res.status(201).json();
  } catch (error) {
    next(error);
  }
};
export { logoutUserCtrl };
