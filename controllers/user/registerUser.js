import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import { addUserSrv } from "../../services/user/index.js";

const registerUserCtrl = async (req, res, next) => {
  try {
    //Валидация
    const { error } = await User.validate(req.body);
    if (error) throw HttpError(400, error.message);

    //Проверка на уникальность Email
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(409).json({
        status: "error",
        code: 409,
        message: "Email is already in use",
        data: "Conflict",
      });
    }

    const { email, subscription } = await addUserSrv(req.body);

    res.status(201).json({
      user: {
        email: email,
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { registerUserCtrl };
