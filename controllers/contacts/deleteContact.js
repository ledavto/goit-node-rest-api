import { HttpError } from "../../helpers/index.js";
import { removeContact } from "../../services/contactsServices/index.js";

const deleteContact = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.id);
    if (!result) {
      throw HttpError(404); //"Not found"
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export { deleteContact };