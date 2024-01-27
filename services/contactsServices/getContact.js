async function getContact(contactId) {
  //Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  return Contact.findById(contactId);
}

export { getContact };