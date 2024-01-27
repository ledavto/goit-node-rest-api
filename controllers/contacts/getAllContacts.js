import { HttpError } from "../../helpers/index.js";
import { listContacts } from "../../services/contactsServices/index.js";

const getAllContacts = async (req, res) => {
  try {
    const result = await listContacts();
    res.status(200).json(result);
  } catch (error) {
    HttpError(500, "Server error!");
  }
};

export { getAllContacts };