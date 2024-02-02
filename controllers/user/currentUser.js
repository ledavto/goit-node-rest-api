import { HttpError } from "../../helpers/index.js";
import { loginUserSrv } from "../../services/user/index.js";

const currentUserCtrl = async (req, res, next) => {
  try {
    // const { error } = createContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }

    const { user, token } = await currentUserSrv(req.body);

    // res.status(200).json({
    //   token,
    //   user: {
    //     email: user.email,
    //     subscription: user.subscription,
    //   },
    // });
  } catch (error) {
    next(error);
  }
};

export { currentUserCtrl };
