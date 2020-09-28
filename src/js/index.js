import './../scss/main.scss';
import MovieDiscover from './models/movie-discover.model';
import Search from './models/search.model';
import {
    elements,
    renderLoader,
    removeLoader
} from './views/base';
import * as searchView from './views/search.view';
import * as movieDiscoverView from './views/movie-discover.view';

const state = {};

async function controlMovieDiscover() {
    state.movieDiscover = new MovieDiscover();
    refreshUI();

    // Get Movie Discover
    await state.movieDiscover.getMovieDiscover();

    // Render results to UI
    movieDiscoverView.renderMovieDiscover(state.movieDiscover);

    // Hide loading spinner
    removeLoader(elements.searchResult);
}

controlMovieDiscover();

async function controlSearch() {
    const query = searchView.getInputValue();
    if (!!query) {
        // Create search object and add to state
        state.search = new Search(query);

        refreshUI();

        // Search for movies
        await state.search.getResults();

        // Render results to UI
        searchView.renderResults(state.search);

        // Hide loading spinner
        removeLoader(elements.searchResult);


    }
}
elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})

elements.pagination.addEventListener('click', async (e) => {

    const btn = e.target.nodeName == "BUTTON";
    if (btn) {
        const goToPage = parseInt(e.target.dataset.page);
        const type = e.target.dataset.type.toString();

        refreshUI();
        if (type === 'search') {

            // Search for movies
            await state.search.getResults(goToPage);

            // Render results to UI
            searchView.renderResults(state.search);

            // Hide loading spinner
            removeLoader(elements.searchResult);
        } else if (type === 'discover') {

            await state.movieDiscover.getMovieDiscover(goToPage);

            // Render results to UI
            movieDiscoverView.renderMovieDiscover(state.movieDiscover);

            // Hide loading spinner
            removeLoader(elements.searchResult);
        }

    }
});

function refreshUI() {

    // Clear the input
    searchView.clearInput();

    // Clear the search title
    searchView.clearResultTitle();

    // Clear the search list
    searchView.clearResults();

    // Clear the pagination
    searchView.clearPagination();

    // Display loading spinner
    renderLoader(elements.searchResult);
}

document.querySelector('.header__inner .logo').addEventListener('click', () => {
    controlMovieDiscover();
})