import { Contact } from "../../models/contactSchema.js";

async function addContact(name, email, phone, owner) {
  //Повертає об'єкт доданого контакту (з id).
  const resAddDb = await Contact.create({ name, email, phone, owner });
  return resAddDb;
}

export { addContact };
