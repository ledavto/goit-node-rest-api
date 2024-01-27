async function addContact(name, email, phone) {
    //Повертає об'єкт доданого контакту (з id).
    const resAddDb = await Contact.create({ name, email, phone } );
     return resAddDb;
}

export { addContact };