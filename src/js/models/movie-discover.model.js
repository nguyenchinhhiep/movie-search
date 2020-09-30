import axious from 'axios';
import { key } from './../config';

export default class MovieDiscover  {
    constructor() {
        this.type= 'discover';
    }

    async getMovieDiscover(page = 1) {
        try {
            const res = await axious(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
            this.currentPage = res.data['page'];
            this.totalPages = res.data['total_pages'];
            this.totalResults = res.data['total_results'];
            this.results = res.data['results'];
        } catch(err) {
            console.log(err);
        }
    }
}