import axios from 'axios';
import { key } from '../config';
import { formatMoney } from '../utils';

export class MovieDetail {
    constructor(id) {
        this.id = id;
    }

   async getMovieDetail() {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${key}`);
            this.result = res['data'];
            this.title = this.result['title'];
            this.status = this.result['status'];
            this.releaseDate = this.result['release_date'];
            this.posterPath = this.result['poster_path'];
            this.userScore = this.result['vote_average'].toFixed(1);
            this.revenue = '$' + formatMoney(this.result['revenue']);
            this.overview = this.result['overview'];
            this.originalLanguage = this.result['original_language'];
            this.homepage = this.result['homepage'];
            this.bugdet = '$' + formatMoney(this.result['budget']);
            this.genres = this.result['genres'].map(item => item.name).join(', ');
        } catch(err) {
            console.log(err);
        }
    }
}

formatMoney