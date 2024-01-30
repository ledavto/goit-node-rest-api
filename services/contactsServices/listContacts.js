import { Contact } from "../../models/contactSchema.js";

async function listContacts() {
  //Повертає масив контактів.
  return Contact.find();
}

export { listContacts };
