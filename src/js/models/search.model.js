import axious from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const key = '54dc44bfa4d2cb4d95ff62a4bf26deb9';
        try {
            const res = await axious(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}&page=1`);
            this.results = res.data['results'];
        } catch (err) {
            console.log(err);
        }
    }

}