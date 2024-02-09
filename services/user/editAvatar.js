// import multer from "multer";
// import sharp from "sharp";
// import * as fse from "fs-extra";
import Jimp from "jimp";
import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import path from "path";

async function editAvatarSrv(token, file) {
  try {
    const user = await User.findOne({ token });
    if (!user) throw HttpError(401, "User data not found");

    const newPath = path.join(process.cwd(), "public");
    const avaFile = `avatars/${user.id}.${file.mimetype.split("/")[1]}`;

    Jimp.read(file.path, (err, newAvatar) => {
      if (err) throw HttpError(400, err);

       newAvatar
        .resize(250, 250) // resize
        .quality(60) // set JPEG quality
        // .greyscale() // set greyscale
        .write(path.join(newPath, avaFile)); // save
    });

    if (file) {
      user.avatarURL= avaFile ;
    }
    return user;
  } catch (error) {}
}

export { editAvatarSrv };
