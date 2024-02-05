import { Contact } from "../../models/contactSchema.js";

async function listContacts(id) {
  //Повертає масив контактів.
  console.log("-----------", id);
  return Contact.find({ owner: { $lte: id } });
}

export { listContacts };
