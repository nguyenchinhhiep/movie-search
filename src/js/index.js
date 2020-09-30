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
import {
    MovieDetail
} from './models/movie-detail.model';
import { renderMovieDetail } from './views/movie-detail.view';

const state = {};

handleHeader();
controlMovieDiscover();
onCloseDialog();





/*
 * MOVIE DISCOVER CONTROLLER
 */

async function controlMovieDiscover() {
    state.movieDiscover = new MovieDiscover();
    // Refresh the UI
    refreshUI();

    try {
        // Get Movie Discover
        await state.movieDiscover.getMovieDiscover();

        // Render results to UI
        movieDiscoverView.renderMovieDiscover(state.movieDiscover);

        // Hide loading spinner
        removeLoader(elements.searchResult);

    } catch (err) {
        alert('Something went wrong');

        // Hide loading spinner
        removeLoader(elements.searchResult);
    }


}

/* 
 * SEARCH CONTROLLER
 */

async function controlSearch() {
    const query = searchView.getInputValue();
    if (!!query) {

        // Create search object and add to state
        state.search = new Search(query);

        // Refresh the UI
        refreshUI();

        try {
            // Search for movies
            await state.search.getResults();

            // Render results to UI
            searchView.renderResults(state.search);

            // Hide loading spinner
            removeLoader(elements.searchResult);
        } catch (err) {
            alert('Something went wrong!')

            // Hide loading spinner
            removeLoader(elements.searchResult);
        }


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


/*
 * MOVIE DETAIL CONTROLLER
 */

async function controlMovieDetail() {
    // Get id from url
    const id = window.location.hash.replace('#', '');
    if (id) {
        state.movieDetail = new MovieDetail(id);

        // Clear Dialog Body
        dialogView.clearDialogBody();

        // Display loader
        renderLoader(elements.dialogBody);

        // Open dialog
        dialogView.displayDialog();

        try {
            
            
            await state.movieDetail.getMovieDetail();

            // Render Movie Detail
            renderMovieDetail(state.movieDetail);

            // Remove loader
            removeLoader(elements.dialogBody);

        } catch (err) {
            alert('Error loading movie detail');

            // Remove loader
            elements.removeLoader(elements.dialogBody);
        }

    }

}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlMovieDetail));

/*
 * OTHER CONTROLLERS
 */
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

function handleHeader() {

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

function onCloseDialog() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.dialog__close') == elements.dialogClose || e.target == elements.dialogContainer) {
            dialogView.closeDialog();
        }

    })
}