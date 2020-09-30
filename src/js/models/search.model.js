import axious from 'axios';
import { key } from './../config';

export default class Search {
    constructor(query) {
        this.query = query;
        this.type = 'search';
    }

    async getResults(page = 1) {
        try {
            const res = await axious(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}&page=${page}`);
            this.currentPage = res.data['page'];
            this.totalPages = res.data['total_pages'];
            this.totalResults = res.data['total_results'];
            this.results = res.data['results'];
        } catch (err) {
            console.log(err);
        }
    }

}