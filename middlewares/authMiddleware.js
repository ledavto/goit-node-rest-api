import multer from "multer";
import path from "path";
import { HttpError } from "../helpers/index.js";
import { checkToken, getUserSrv } from "../services/user/index.js";

const protect = async (req, res, next) => {
  try {
    const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];

    if (!token) throw HttpError("401", "Not authorized");

    const userId = checkToken(token);

    if (!userId) throw HttpError("401", "Not authorized");

    const currentUser = await getUserSrv(userId);

    if (!currentUser) throw HttpError("401", "Not authorized");

    next();
  } catch (error) {
    next(error);
  }
};

// BASIC MULTER USAGE
// config storage
const multerStorage = multer.diskStorage({
  destination: (req, file, cbk) => {
    cbk(null, path.join("tmp"));
  },
  filename: (req, file, cbk) => {
    const extension = file.mimetype.split("/")[1]; // 'image/png'

    console.log(req.token);
    // <userId>-<randomId>.<extension>
    cbk(null, `12345.${extension}`);
    // cbk(null, `${req.user.id}-${v4()}.${extension}`);
  },
});

// config filter
const multerFilter = (req, file, cbk) => {
  if (file.mimetype.startsWith("image/")) {
    cbk(null, true);
  } else {
    cbk(new HttpError(400, "Please, upload images only.."), false);
  }
};

const uploadAvatar = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
}).single("File");

export { protect, uploadAvatar };
