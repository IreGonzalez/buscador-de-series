function savedFavList() {
    //guarda en la caché las datos elegidos
    localStorage.setItem('favourites', JSON.stringify(favourites));
}

//Extraemos de la caché los datos recorriendo la lista de la Api y extrayendo los necesarios para nuestra web
function getLocalStorage() {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites'))
    favourites = savedFavourites;
    // for (const favSelected of favourites) {
    //     paintFavList()
    // }
}

getLocalStorage()
console.log(favourites);