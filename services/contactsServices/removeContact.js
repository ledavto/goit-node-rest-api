
async function removeContact(contactId) {
    // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
    const resReadDb = await Contact.findByIdAndDelete( contactId );
    return resReadDb;
}

export { removeContact };
