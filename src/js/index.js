// import './../scss/main.scss';
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
import {
    renderMovieDetail
} from './views/movie-detail.view';
import FavoriteListModel from './models/favorite-list.model';
import * as favoriteView from './views/favorite.view';

// PRELOADER CONTROLLER
window.onload = function () {
    //hide the preloader
    document.querySelector(".preloader").style.display = "none";
    handleHeader();
    controlMovieDiscover();
    handleClickEvents();
}

const state = {};







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

        // Add click event to movie item
        document.querySelectorAll('.movie__item > a').forEach(item => {
            item.addEventListener('click', () => {
                const id = parseInt(item.dataset.id, 10);
                controlMovieDetail(id);
            });
        });

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
    const query = searchView.getInputValue().trim();
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

            // Add click event to movie item
            document.querySelectorAll('.movie__item a').forEach(item => {
                item.addEventListener('click', () => {
                    const id = parseInt(item.dataset.id, 10);
                    controlMovieDetail(id);
                });
            })
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

            try {
                // Search for movies
                await state.search.getResults(goToPage);

                // Render results to UI
                searchView.renderResults(state.search);

                // Hide loading spinner
                removeLoader(elements.searchResult);

                // Add click event to movie item
                document.querySelectorAll('.movie__item a').forEach(item => {
                    item.addEventListener('click', () => {
                        const id = parseInt(item.dataset.id, 10);
                        controlMovieDetail(id);
                    });
                })
            } catch (err) {
                alert('Something went wrong!');
            }


        } else if (type === 'discover') {

            try {
                await state.movieDiscover.getMovieDiscover(goToPage);

                // Render results to UI
                movieDiscoverView.renderMovieDiscover(state.movieDiscover);

                // Hide loading spinner
                removeLoader(elements.searchResult);

                // Add click event to movie item
                document.querySelectorAll('.movie__item a').forEach(item => {
                    item.addEventListener('click', () => {
                        const id = parseInt(item.dataset.id, 10);
                        controlMovieDetail(id);
                    });
                })
            } catch (err) {
                alert('Something went wrong!');
            }

        }

    }
});


/*
 * MOVIE DETAIL CONTROLLER
 */

async function controlMovieDetail(id) {

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
            renderMovieDetail(state.movieDetail, state.favoriteList.isFavorite(state.movieDetail.id));

            // Remove loader
            removeLoader(elements.dialogBody);

        } catch (err) {
            alert('Error loading movie detail');

            // Remove loader
            elements.removeLoader(elements.dialogBody);
        }

    }

}


['load'].forEach(event => window.addEventListener(event, () => {
    // Get id from url
    const id = window.location.hash.replace('#', '');
    controlMovieDetail(id);
}));


/*
 * FAVORITE CONTROLLER
 */


function controlFavorite() {
    if (!state.favoriteList) state.favoriteList = new FavoriteListModel();

    const currentID = state.movieDetail.id;

    if (!state.favoriteList.isFavorite(currentID)) {
        // Add movie to favorite list
        const newFavorite = state.favoriteList.addFavoriteMovie(
            currentID,
            state.movieDetail.title,
            state.movieDetail.posterPath,
            state.movieDetail.releaseDate
        );

        //  Toggle the favorite button
        favoriteView.toggleFavoriteBtn(true);

        // Add to favorite UI list
        favoriteView.renderFavoriteMovie(newFavorite);

        // Add click event to it
        const el = document.querySelector(`.favorite__link[href="#${currentID}"]`);
        el.addEventListener('click', () => {

            const id = parseInt(el.dataset.id, 10);
            controlMovieDetail(id);
        })

    } else {
        // Remove movie from favorite list
        state.favoriteList.deleteFavoriteMovie(currentID);

        //  Toggle the favorite button
        favoriteView.toggleFavoriteBtn(false);

        // Remove to favorite UI list
        favoriteView.deleteFavoriteMovie(currentID);

    }

    // Update the favorite header button
    favoriteView.toggleFavoriteHeaderBtn(state.favoriteList.favoriteList.length);

    // Update clear all the list button
    favoriteView.toggleClearAllBtn(state.favoriteList.favoriteList.length);

    // Add click event to clear all button
    const clearAllBtn = document.querySelector('.clear-all');
    if (clearAllBtn) clearAllBtn.addEventListener('click', () => {
        state.favoriteList.clearFavoriteList();

        // Clear favorite list
        favoriteView.clearAllFavoriteMovie();

        // Update the favorite header button
        favoriteView.toggleFavoriteHeaderBtn(state.favoriteList.favoriteList.length);

        // Update clear all the list button
        favoriteView.toggleClearAllBtn(state.favoriteList.favoriteList.length);
    });

}

window.addEventListener('load', () => {
    state.favoriteList = new FavoriteListModel();
    state.favoriteList.readStorage();
    favoriteView.toggleClearAllBtn(state.favoriteList.favoriteList.length);
    const clearAllBtn = document.querySelector('.clear-all');
    if (clearAllBtn) clearAllBtn.addEventListener('click', () => {
        state.favoriteList.clearFavoriteList();
        // Clear favorite list
        favoriteView.clearAllFavoriteMovie();

        // Update the favorite header button
        favoriteView.toggleFavoriteHeaderBtn(state.favoriteList.favoriteList.length);

        // Update clear all the list button
        favoriteView.toggleClearAllBtn(state.favoriteList.favoriteList.length);
    });
    favoriteView.toggleFavoriteHeaderBtn(state.favoriteList.favoriteList.length);
    state.favoriteList.favoriteList.forEach(movie => {
        favoriteView.renderFavoriteMovie(movie);
        // Add click event to it
        const el = document.querySelector(`.favorite__link[href="#${movie.id}"]`);
        el.addEventListener('click', () => {
            controlMovieDetail(+movie.id);
        })
    })
})

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

function handleClickEvents() {
    document.addEventListener('click', (e) => {
        if (e.target.closest('.dialog__close') == elements.dialogClose || e.target == elements.dialogContainer) {
            dialogView.closeDialog();
        } else if (e.target.classList.contains('fa-heart') && e.target.closest('.favorite')) {
            elements.favoriteListWrapper.classList.toggle('active');
        } else if (e.target.closest('.movie-detail__favorite')) {
            controlFavorite();
        } else if (!e.target.classList.contains('clear-all')) {
            elements.favoriteListWrapper.classList.remove('active');
        }


    })
}