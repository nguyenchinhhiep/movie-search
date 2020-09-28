import {
    elements
} from "./base";

import {renderMovie, renderButtons} from './search.view';

export const renderMovieDiscover = (res) => {
    const {results, totalPages, currentPage, type} = res;
    elements.searchTitle.textContent = 'Discover';

    results.forEach(movie => {
        renderMovie(movie);
    });
    renderButtons(currentPage, totalPages, type);
}