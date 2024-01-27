import { HttpError } from "../../helpers/index.js";
import { updateFavoriteSchema } from "../../models/schemas.js";
import { updateFavorite } from "../../services/contactsServices/index.js";

const updateFavoriteById = async (req, res, next) => {
  try {
    const { error } = updateFavoriteSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message);
    }

    if (Object.keys(req.body).length === 0) {
      throw HttpError(400, "missing field favorite");
    }

    const { id } = req.params;
    const result = await updateFavorite(id, req.body);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

export { updateFavoriteById };