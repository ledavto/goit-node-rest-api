import { HttpError } from "../../helpers/index.js";
import { loginUserSrv } from "../../services/user/index.js";

const loginUserCtrl = async (req, res, next) => {
  try {
    // const { error } = createContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }


    const { user, token} = await loginUserSrv(req.body);

    console.log(token);

    res.status(200).json({
      token,
      user: {
        email: user.email,
        subscription: user.subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { loginUserCtrl };
