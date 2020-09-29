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
import * as dialogView from './views/dialog.view';

const state = {};


const refreshUI = () => {

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

const handleHeader = () => {

    const search = document.querySelector('.search');
    const input = document.querySelector('.search__input');

    document.querySelector('.header__inner .logo').addEventListener('click', () => {
        controlMovieDiscover();
    })

    document.querySelector('.favorite .fa-search').addEventListener('click', (e) => {

        search.style.display = 'flex';
        input.focus();
    })

    document.querySelector('.search__cancel').addEventListener('click', () => {
        search.style.display = 'none';
    })
}

const onCloseDialog = () => {
    elements.dialogClose.addEventListener('click', () => {
        dialogView.closeDialog();
    })
}
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

handleHeader();
controlMovieDiscover();
onCloseDialog();

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