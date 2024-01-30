import { HttpError } from "../../helpers/index.js";
import { addUser } from "../../services/user/index.js";

const registerUser = async (req, res, next) => {
  try {
    // const { error } = createContactSchema.validate(req.body);
    // if (error) {
    //   throw HttpError(400, error.message);
    // }

    const newUser = await addUser(req.body);
    res.json({
      email: newUser.email,
      subscription: newUser.subscription,
    });
  } catch (error) {
    next(error);
  }
};

export { registerUser };
