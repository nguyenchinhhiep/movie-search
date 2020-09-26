import {
    elements
} from "./base";

export const getInputValue = () => elements.searchInput.value;
export const clearInput = () => {
    elements.searchInput.value = '';
}
export const clearResults = () => {
    elements.searchResultsList.innerHTML = '';
}

const IMG_API = 'https://image.tmdb.org/t/p/w1280';
const renderMovie = (movie) => {
    let year = 'Unknown';
    const date = movie['release_date'];
    if(!!date) {
        const dateArr = date.split('-');
        year = dateArr[0];
    }
    
    const markup = `
        <li class="movie__item">
            <div class="movie__image"><img
                    src="${movie['poster_path']? IMG_API + movie['poster_path']: 'images/no-image.jpg' }" alt="${movie.title}">
            </div>
            <div class="movie__text">
                <h3 class="movie__name" title="${movie.title}">${movie.title}</h3>
                <span class="movie__year">${year}</span>
            </div>  
        </li>
    `
    elements.searchResultsList.insertAdjacentHTML('beforeend', markup);

}

export const renderResults = (movies) => {
    elements.searchTitle.textContent = `Search results (${movies.length})`;
    movies.forEach(movie => {
        renderMovie(movie);
    })
}