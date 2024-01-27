import express from "express";
import { createContact, deleteContact, getAllContacts, getContactById, updateContactById, updateFavoriteById } from "../controllers/contacts/index.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAllContacts);

contactsRouter.get("/:id", getContactById);

contactsRouter.delete("/:id", deleteContact);

contactsRouter.post("/", createContact);

contactsRouter.put("/:id", updateContactById);

contactsRouter.patch("/:id/favorite", updateFavoriteById);

export default contactsRouter;
