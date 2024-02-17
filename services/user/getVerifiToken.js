import HttpError from "../../helpers/HttpError.js";
import { User } from "../../models/userSchema.js";

async function getUserVerifiSrv(code) {
    
    const user = await User.findOne({ verificationToken: code });
    if (!user) throw HttpError(404, "Not found");

    user.verificationToken = null;
    user.verify = true;

    await User.findByIdAndUpdate(user.id, user);

    return;
    
}

export {getUserVerifiSrv}