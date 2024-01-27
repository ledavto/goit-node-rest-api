import { HttpError } from "../../helpers/index.js";
import { getContact } from "../../services/contactsServices/index.js";

const getContactById = async (req, res, next) => {
  try {
    const result = await getContact(req.params.id);
    if (!result) {
      throw HttpError(404); //"Not found"
    }

    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export { getContactById };