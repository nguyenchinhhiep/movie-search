import {
    elements
} from "./base";

import noImage from "./../../assets/images/no-image.jpg";

export const getInputValue = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.searchResultsList.innerHTML = '';
}

export const clearPagination = () => {
    elements.pagination.innerHTML = '';
}

const IMG_API = 'https://image.tmdb.org/t/p/w500';
const renderMovie = (movie) => {
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


const createButtons = (page, type) => {
    return `<button data-page="${type === 'Prev'? page - 1: page + 1}">${type}</button>`
}

const renderButtons = (currentPage, totalPages) => {
    let button;
    if (currentPage === 1 && totalPages > 1) {
        // Render only next button
        button = createButtons(currentPage, 'Next')
    } else if (currentPage < totalPages) {
        // Render both buttons
        button = createButtons(currentPage, 'Prev') + createButtons(currentPage, 'Next')
    } else if (currentPage === totalPages) {
        // Render only prev button
        button = createButtons(currentPage, 'Prev')
    }

    elements.pagination.insertAdjacentHTML('afterbegin', button);
}

export const renderResults = (movies, totalPages, currentPage) => {
    elements.searchTitle.textContent = `Search results`;
    movies.forEach(movie => {
        renderMovie(movie);
    });
    renderButtons(currentPage, totalPages);
}