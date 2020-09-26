import './../scss/main.scss';
import Search from './models/search.model';
import {elements} from './views/base';
import * as searchView from './views/search.view';

const state = {};


async function controlSearch() {
    const query = searchView.getInputValue();
    if(!!query) {
        // Create search object and add to state
        state.search = new Search(query);

        // Search for movies
        await state.search.getResults();

        // Clear the input
        searchView.clearInput();

        // Clear the search list
        searchView.clearResults();

        // Render results to UI
        searchView.renderResults(state.search.results);
    }
}
elements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch();
})
