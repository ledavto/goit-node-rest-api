import {verifyUserEmailSrv } from "../../services/user/index.js";

const verifyUserEmailCtrl = async (req, res, next) => {
  try {
     const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];

    const { verificationToken } = await verifyUserEmailSrv(token);

    res.status(200).json({
      message: 'Verification successful'
    });
  } catch (error) {
    next(error);
  }
};

export { verifyUserEmailCtrl };