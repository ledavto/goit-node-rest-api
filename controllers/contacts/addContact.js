import { HttpError } from "../../helpers/index.js";
import { createContactSchema } from "../../models/contactSchema.js";
import { addContact } from "../../services/contactsServices/index.js";

const createContact = async (req, res, next) => {
  try {
    const { error } = createContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { name, email, phone } = req.body;
    const result = await addContact(name, email, phone);
    if (!result) {
      throw HttpError(404);
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export { createContact };
