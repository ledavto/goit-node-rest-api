import { nanoid } from "nanoid";
import { HttpError, sendEmail } from "../../helpers/index.js";
import { User, schema } from "../../models/userSchema.js";
import { addUserSrv, reSendEmailSrv } from "../../services/user/index.js";

const registerUserCtrl = async (req, res, next) => {
  try {
    //Валидация
    const verificationToken = nanoid();
    const { error } = await User.validate({ ...req.body, verificationToken });
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

    const { email, subscription} = await addUserSrv({ ...req.body, verificationToken });
    
    await sendEmail({
      to: email,
      subject: "Email Verifycation",
      html: `<h1>Verify email</h1> <p>Hello, please verify email to URL</p><p>localhost:3000/users/verify/${verificationToken}</p>`
    });

    res.status(201).json({
      user: {
        email,
        subscription,
      },
    });
  } catch (error) {
    next(error);
  }
};


const reSendVerifyEmail = async (req, res, next) => {
  try {

    const { error } = await (req.body);
    if (error) throw HttpError(400, error.message);
    
    const { email, verificationToken, verify } = await reSendEmailSrv(req.body.email);
    
    if (verify) throw HttpError(400, 'Verification has already been passed');

    await sendEmail({
      to: email,
      subject: "Email Verifycation repeat",
      html: `<h1>Verify email</h1> <p>Hello, please verify email to URL</p><p>localhost:3000/users/verify/${verificationToken}</p>`
    });
    
      res.status(200).json({
        "message": "Verification email sent"
      });
  } catch (error) {
    next(error);
  }
  
}

export { registerUserCtrl, reSendVerifyEmail };
