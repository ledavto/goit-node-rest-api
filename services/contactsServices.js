import { nanoid } from "nanoid";
import path from "path";
import * as fs from "fs/promises";
import mongoose from "mongoose";
import { Contact } from "./schemas.js";

const contactsPath = path.join("db", "contacts.json");

export async function listContacts() {
  //Повертає масив контактів.
  try {
    const resReadDb = await Contact.find();
    return resReadDb;
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function getContact(contactId) {
  //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const resReadDb = await Contact.find({ _id: contactId });
    return resReadDb;
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function removeContact(contactId) {
  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  try {
    const resReadDb = await Contact.deleteOne({ _id: contactId });
    return resReadDb;

  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function addContact(name, email, phone) {
  //Повертає об'єкт доданого контакту (з id).
  try {
    const resAddDb = await Contact.create({ name, email, phone});
    return resAddDb;
  } catch (err) {
    console.log("Error: ", err);
  }
}

export async function updateContact(id, body) {
  // Оновлює дані контакта
  try {

    await Contact.updateOne({ _id:id}, body);
    return await Contact.find({ _id: id });

  } catch (error) {}
}

export async function updateFavorite(id, body) {
  // Оновлює дані контакта
  try {
    
    await Contact.updateOne({ _id:id}, body);
    return await Contact.find({ _id: id });

  } catch (error) {}
}
