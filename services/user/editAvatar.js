// import multer from "multer";
// import sharp from "sharp";
// import path from "path";
// import { v4 } from "uuid";
// import * as fse from "fs-extra";
import Jimp from "jimp";
import { HttpError } from "../../helpers/index.js";
import { User } from "../../models/userSchema.js";
import path from "path";

async function editAvatarSrv(token, file) {
  try {
    const user = await User.findOne({ token });
    if (!user) throw HttpError(401, "User data not found");

    Jimp.read(file.path, (err, newAvatar) => {
      if (err) throw err;

      const newPath = path.join(process.cwd(), "public");

      const avaFile = `avatars/${user.id}.${file.path.split(".").reverse()[0]}`;

      newAvatar
        .resize(250, 250) // resize
        .quality(60) // set JPEG quality
        // .greyscale() // set greyscale
        .write(path.join(newPath, avaFile)); // save
    });

    if (file) {
      // user.avatarURL = avaFile;
    }

    return user;
  } catch (error) {}
}

export { editAvatarSrv };

// export class editAvatarSvr {
//   static initUploadImageMiddleware(name) {
//     const multerStorage = multer.memoryStorage();

//     const multerFilter = (req, file, cbk) => {
//       if (file.mimetype.startsWith("image/")) {
//         cbk(null, true);
//       } else {
//         cbk(new HttpError(400, "Please, upload images only.."), false);
//       }
//     };

//     return multer({
//       storage: multerStorage,
//       fileFilter: multerFilter,
//     }).single(name);
//   }

//   // saveImage(file, options, 'images', 'users', 'userId')
//   static async saveImage(file, options, ...pathSegments) {
//     if (
//       file.size >
//       (options?.maxFileSize
//         ? options.maxFileSize * 1024 * 1024
//         : 1 * 1024 * 1024)
//     ) {
//       throw new HttpError(400, "File is too large!");
//     }

//     const fileName = `${v4()}.jpeg`;
//     const fullFilePath = path.join(process.cwd(), "public", ...pathSegments);

//     await fse.ensureDir(fullFilePath);
//     await sharp(file.buffer)
//       .resize({ height: options?.height ?? 300, width: options?.width ?? 300 })
//       .toFormat("jpeg")
//       .jpeg({ quality: 90 })
//       .toFile(path.join(fullFilePath, fileName));

//     return path.join(...pathSegments, fileName);
//   }
// }
