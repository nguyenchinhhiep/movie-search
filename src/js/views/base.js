export const elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__input'),
    searchTitle: document.querySelector('.ms__search-results  h2'),
    searchResultsList: document.querySelector('.movie__list'),
    searchResult: document.querySelector('.ms__search-results'),
    movieItem: document.querySelectorAll('.movie__item'),
    pagination: document.querySelector('.pagination'),
    dialogContainer: document.querySelector('.dialog__container'),
    dialogClose: document.querySelector('.dialog__close'),
    dialogContent: document.querySelector('.dialog__content'),
    dialogBody: document.querySelector('.dialog__body'),
    favoriteButtonHeader: document.querySelector('.favorite .fa-heart'),
    favoriteListWrapper: document.querySelector('.favorite__list-wrapper'),
    favoriteList: document.querySelector('.favorite__list'),
    favoriteButton: document.querySelector('.movie-detail__favorite')
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