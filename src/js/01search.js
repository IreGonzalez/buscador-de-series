
//FUNCTIONS

//Search

function urlCreator() {
    const url = `//api.tvmaze.com/search/shows?q=${input.value}`;
    return url;
};

function paintSeries() {
    let html = '';
    let favClass = '';
    seriesList.innerHTML = '';
    for (const search of series) {
        const id = search.show.id;
        const title = search.show.name;
        const image = search.show.image;
        const insertFavClass = searchFavourites(search);
        if (insertFavClass) {
            favClass = '__clicked'
        }
        else {
            favClass = '';
        }

        html += `<li class="list__elements js_elements" id= "${id}">`;
        if (image === null) {
            const image = 'https://via.placeholder.com/210x295/ffffff/666666/text=TV'
            html += `<img class="list__elements--image${favClass} js_image" src="${image}" alt="Cartel de la serie"></img>`;
        }
        else {
            html += `<img class="list__elements--image${favClass} js_image" src="${image.original}" alt="Cartel de la serie"></img>`;
        }
        html += `<p class="list__elements--series${favClass} js_series">${title}</p>`;
        html += `</li>`;
    }
    seriesList.innerHTML = html;
    listenerSelection();
};

function handleSearchSeries(event) {
    event.preventDefault();
    let url = urlCreator();
    fetch(url)
        .then(response => response.json())
        .then(data => {
            series = data;
            paintSeries();
        })
};

