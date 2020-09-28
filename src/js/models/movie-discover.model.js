import axious from 'axios';

export default class MovieDiscover  {
    constructor() {
        this.type= 'discover';
    }

    async getMovieDiscover(page = 1) {
        const key = '54dc44bfa4d2cb4d95ff62a4bf26deb9';
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