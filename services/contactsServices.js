import { Contact } from "../models/schemas.js";

export async function listContacts() {
  //Повертає масив контактів.
    return Contact.find();
}

export async function getContact(contactId) {
  //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  return Contact.findById(contactId);
}

export async function removeContact(contactId) {
    // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const resReadDb = await Contact.findByIdAndDelete( contactId );
    return resReadDb;
}

export async function addContact(name, email, phone) {
    //Повертає об'єкт доданого контакту (з id).
    const resAddDb = await Contact.create({ name, email, phone } );
     return resAddDb;
}

export async function updateContact(id, body) {
  // Оновлює дані контакта , 
    const resAddDb = await Contact.findByIdAndUpdate( id , body, { new: true });
     return resAddDb;
}

export async function updateFavorite(id, body) {
  // Оновлює дані контакта
  try {
    
    return Contact.findByIdAndUpdate(id, body, {"new":true});

  } catch (error) {console.log("Error: ", err);}
}