import { Contact } from "../../models/contactSchema.js";

async function updateContact(id, body) {
  // Оновлює дані контакта ,
  const resAddDb = await Contact.findByIdAndUpdate(id, body, { new: true });
  return resAddDb;
}

export { updateContact };
