import { Contact } from "../../models/contactSchema.js";

async function listContacts(id) {
  //Повертає масив контактів.
  return Contact.find({ owner: { $lte: id } });
}

export { listContacts };
