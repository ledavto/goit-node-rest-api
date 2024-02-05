import { HttpError } from "../../helpers/index.js";
import { createContactSchema } from "../../models/contactSchema.js";
import { addContact } from "../../services/contactsServices/index.js";
import { checkToken } from "../../services/user/jwtServices.js";

const createContact = async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];
  
    const userId = checkToken(token);

    const { name, email, phone } = req.body;
    const result = await addContact(name, email, phone, userId);
    if (!result) {
      throw HttpError(404);
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export { createContact };
