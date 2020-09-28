import {
    elements
} from "./base";

import noImage from "./../../assets/images/no-image.jpg";

export const getInputValue = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearResultTitle = () => {
    elements.searchTitle.innerHTML = '';
}
export const clearResults = () => {
    elements.searchResultsList.innerHTML = '';
}

export const clearPagination = () => {
    elements.pagination.innerHTML = '';
}

const IMG_API = 'https://image.tmdb.org/t/p/w500';

export const renderMovie = (movie) => {
    let year = 'Unknown';
    const date = movie['release_date'];
    if (!!date) {
        const dateArr = date.split('-');
        year = dateArr[0];
    }

    const markup = `
        <li class="movie__item">
            <div class="movie__image"><img
                    src="${movie['poster_path']? IMG_API + movie['poster_path']: noImage}" alt="${movie.title}">
            </div>
            <div class="movie__text">
                <h3 class="movie__name" title="${movie.title}">${movie.title}</h3>
                <span class="movie__year">${year}</span>
            </div>  
        </li>
    `
    elements.searchResultsList.insertAdjacentHTML('beforeend', markup);

}


export const createButtons = (page, typeButton, type) => {
    return `<button data-page="${typeButton === 'Prev'? page - 1: page + 1}" data-type="${type}">Page ${typeButton === 'Prev'? page - 1: page + 1}</button>`
}

export const renderButtons = (currentPage, totalPages, type) => {
    let button;
    if (currentPage === 1 && totalPages > 1) {
        // Render only next button
        button = createButtons(currentPage, 'Next', type)
    } else if (currentPage < totalPages) {
        // Render both buttons
        button = createButtons(currentPage, 'Prev', type) + createButtons(currentPage, 'Next', type)
    } else if (currentPage === totalPages && totalPages > 1) {
        // Render only prev button
        button = createButtons(currentPage, 'Prev', type)
    }

    if(!!button) elements.pagination.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (res) => {
    const {results, totalPages, currentPage, query, totalResults, type} = res;
    elements.searchTitle.textContent = `Search (${query.toLowerCase()}): ${totalResults} results.`;
    results.forEach(movie => {
        renderMovie(movie);
    });
    renderButtons(currentPage, totalPages, type);
}