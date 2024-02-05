import { HttpError } from "../../helpers/index.js";
import { listContacts } from "../../services/contactsServices/index.js";
import { checkToken } from "../../services/user/jwtServices.js";

const getAllContacts = async (req, res) => {
  try {
    
    const token =
      req.headers.authorization?.startsWith("Bearer ") &&
      req.headers.authorization.split(" ")[1];
  
    const userId = checkToken(token);

    const result = await listContacts(userId);
    res.status(200).json(result);
  } catch (error) {
    HttpError(500, "Server error!");
  }
};

export { getAllContacts };
