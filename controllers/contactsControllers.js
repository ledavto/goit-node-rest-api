import { listContacts, removeContact } from "../services/contactsServices.js";

export const getAllContacts = async (req, res) => {
    try {
        const result = await listContacts();
        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export const getContactById = async (req, res) => {
    //   try {
    //     const result = await getContact(req);
    //     res.json(result);
    // } catch (error) {
    //     console.log(error);
    // }
};

export const deleteContact = async (req, res) => {
          try {
        const result = await removeContact(req);
        res.json(result);
    } catch (error) {
        console.log(error);
    }
};

export const createContact = (req, res) => {};

export const updateContact = (req, res) => {};
