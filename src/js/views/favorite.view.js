import {
    elements
} from "./base";
import noImage from "./../../assets/images/no-image.jpg";
import {IMG_API} from './../config';

export const toggleFavoriteBtn = (isFavorite) => {
    if(isFavorite) {
        document.querySelector('.movie-detail__favorite').classList.add('active');
    } else {
        document.querySelector('.movie-detail__favorite').classList.remove('active');
    }
}

export const toggleFavoriteHeaderBtn = (num) => {
    if(num > 0 ){
        const emptyEl = document.querySelector('.empty-list');
        if(emptyEl) emptyEl.parentElement.removeChild(emptyEl);
        elements.favoriteButtonHeader.classList.add('active');
    } else {
        const emptyMarkup = `
            <li class="empty-list">The list is empty.</li>                    
        `
        elements.favoriteButtonHeader.classList.remove('active');
        elements.favoriteList.insertAdjacentHTML('afterbegin', emptyMarkup);
    }
}

export const toggleClearAllBtn = (length) => {
    const clearAllBtnEl = document.querySelector('.clear-all');
    if(length > 0 ){

        if(!clearAllBtnEl) {
            const markup = `
                <a class="clear-all">Clear all</a>
            `;

            elements.favoriteListWrapper.insertAdjacentHTML('beforeend', markup);
        }
    } else {
        if(clearAllBtnEl) clearAllBtnEl.parentElement.removeChild(clearAllBtnEl);
    }
}

export const renderFavoriteMovie = (movie) => {
    let year;
    const date = movie['releaseDate'];
    if (!!date) {
        const dateArr = date.split('-');
        year = dateArr[0];
    }
    const markup = `
        <li class="favorite__item">
            <a href="#${movie.id}" class="favorite__link" data-id="${movie.id}">
                <div class="favorite__img"><img
                        src="${movie.imgURL? IMG_API + movie.imgURL: noImage}" alt="">
                </div>
                <div class="favorite__text">
                    <div class="favorite__title">${movie.title}</div>
                    <div class="favorite__year">${year}</div>
                </div>
            </a>
        </li>
    `

    elements.favoriteList.insertAdjacentHTML('beforeend', markup);
    
}

export const deleteFavoriteMovie = (id) => {
    const el = document.querySelector(`.favorite__link[href="#${id}"]`).parentElement;
    if(el) el.parentElement.removeChild(el);
}

export const clearAllFavoriteMovie = () => {
    elements.favoriteList.innerHTML = '';
}