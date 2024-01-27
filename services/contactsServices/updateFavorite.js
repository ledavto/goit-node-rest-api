async function updateFavorite(id, body) {
  // Оновлює дані контакта
  try {
    
    return Contact.findByIdAndUpdate(id, body, {"new":true});

  } catch (error) {console.log("Error: ", err);}
}

export { updateFavorite };