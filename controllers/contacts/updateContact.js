import { HttpError } from "../../helpers/index.js";
import { updateContactSchema } from "../../models/schemas.js";
import { updateContact } from "../../services/contactsServices/index.js";

const updateContactById = async (req, res, next) => {
  try {
    console.log(req);
    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "Body must have at least one field");
    }
    const { error } = updateContactSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    const { id } = req.params;
    const result = await updateContact(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export { updateContactById };