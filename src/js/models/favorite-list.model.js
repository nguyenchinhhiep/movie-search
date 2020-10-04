export default class FavoriteListModel {

    constructor() {
        this.favoriteList = [];
    }

    addFavoriteMovie(id, title, imgURL, releaseDate) {
        const favoriteMovie = {id, title, imgURL, releaseDate};
        this.favoriteList.push(favoriteMovie);
        this.persistData();
        return favoriteMovie;
    }

    deleteFavoriteMovie(id) {
        const index = this.favoriteList.findIndex(movie => movie.id == id);
        this.favoriteList.splice(index,1);
        this.persistData();
    }

    clearFavoriteList() {
        this.favoriteList = [];
        this.persistData();
    }

    isFavorite(id) {
        return this.favoriteList.findIndex(movie => movie.id == id) !== -1; 
    }

    getNumberFavorite() {
        return this.favoriteList.length;
    }

    persistData() {
        localStorage.setItem('favoriteList', JSON.stringify(this.favoriteList));
    }

    readStorage() {
        const storage = localStorage.getItem('favoriteList');
        if(storage) this.favoriteList = JSON.parse(storage);
    }
}