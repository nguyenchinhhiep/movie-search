export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__input'),
    searchTitle: document.querySelector('.search-results  h2'),
    searchResultsList: document.querySelector('.movie__list'),
    searchResult: document.querySelector('.search-results'),
    pagination: document.querySelector('.pagination')
}

export const renderLoader = (parent) => {
    const loader = `
        <div class="loader">
        <i class="fas fa-circle-notch fa-spin fa-2x"></i>
        </div>
    `;

    parent.insertAdjacentHTML('afterbegin', loader);
}

export const removeLoader = (parent) => {
    const loader = parent.querySelector('.loader');
    if(loader) {
        parent.removeChild(loader);
    }
}