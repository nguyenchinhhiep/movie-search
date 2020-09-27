import './../scss/main.scss';
import Search from './models/search.model';
import {
    elements,
    renderLoader,
    removeLoader
} from './views/base';
import * as searchView from './views/search.view';

const state = {};


async function controlSearch() {
    const query = searchView.getInputValue();
    if (!!query) {
        // Create search object and add to state
        state.search = new Search(query);

        // Search for movies
        await state.search.getResults();

        // Clear the input
        searchView.clearInput();

        // Clear the search list
        searchView.clearResults();

        // Clear the pagination
        searchView.clearPagination();

        // Display loading spinner
        renderLoader(elements.searchResult);

        // Render results to UI
        searchView.renderResults(state.search.results, state.search.totalPages, state.search.currentPage);

        // Hide loading spinner
        removeLoader(elements.searchResult);


    }
}
elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})

elements.pagination.addEventListener('click', async (e)=> {
    
    const btn = e.target.nodeName == "BUTTON";
    if(btn) {
        const goToPage = parseInt(e.target.dataset.page);
        searchView.clearResults();
        searchView.clearPagination();
        await state.search.getResults(goToPage);
        searchView.renderResults(state.search.results, state.search.totalPages, state.search.currentPage);
    }
})