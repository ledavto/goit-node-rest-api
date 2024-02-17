import { getUserVerifiSrv} from "../../services/user/index.js";

const verifyUserEmailCtrl = async (req, res, next) => {
  try {
   await getUserVerifiSrv(req.params.verificationToken);

    res.status(200).json({
      message: "Verification successful",
    });
  } catch (error) {
    next(error);
  }
};

export { verifyUserEmailCtrl };
