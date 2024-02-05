import { HttpError } from "../../helpers/index.js";
import { listContacts } from "../../services/contactsServices/index.js";

const getAllContacts = async (req, res) => {
  try {
    const { id } = req.user;

    const result = await listContacts(id);
    res.status(200).json(result);
  } catch (error) {
    HttpError(500, "Server error!");
  }
};

export { getAllContacts };
