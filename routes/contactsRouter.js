import express from "express";
import {
  createContact,
  deleteContact,
  getAllContacts,
  getContactById,
  updateContactById,
  updateFavoriteById,
} from "../controllers/contacts/index.js";
import { protect } from "../middlewares/index.js";

const contactsRouter = express.Router();

contactsRouter.use(protect);
contactsRouter
  .get("/", getAllContacts)
  .get("/:id", getContactById)
  .delete("/:id", deleteContact)
  .post("/", createContact)
  .put("/:id", updateContactById)
  .patch("/:id/favorite", updateFavoriteById);

export default contactsRouter;
