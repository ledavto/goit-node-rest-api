import { Contact } from "../../models/schemas.js";

async function listContacts() {
  //Повертає масив контактів.
    return Contact.find();
}

export { listContacts };