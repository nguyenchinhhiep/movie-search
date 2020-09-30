import { IMG_API } from "../config"
import { elements } from "./base";
import noImage from "./../../assets/images/no-image.jpg";


export const renderMovieDetail = (movie) => {


    const markup = `
            <div class="ms__search-details">
                <div class="movie-detail__img"><img
                        src="${movie.posterPath? IMG_API + movie.posterPath: noImage}" alt=""></div>
                <div class="movie-detail__content">
                    <div class="movie-detail__title">
                        <h3>${movie.title}</h3><span
                            class="movie-detail__favorite" title="Favorite"><i
                                class="fas fa-heart"></i></span>
                    </div>
                    <ul class="movie-detail__meta-info">
                        <li><label>Status:</label><span>${movie.status}</span></li>
                        <li><label>Score:</label><span style="color: #CC0000">${movie.userScore}</span></li>
                        <li><label>Release Date:</label><span>${movie.releaseDate}</span></li>
                        <li><label>Website:</label><span class="movie-detail__website"><a href="${movie.homepage}" target="_blank"> ${movie.homepage}</a></span></li>
                        <li><label>Genre:</label><span>${movie.genres}</span></li>
                        <li><label>Budget:</label><span>${movie.bugdet}</span></li>
                        <li><label>Revenue:</label><span>${movie.revenue}</span></li>
                        <li><label>Overview:</label><span>${movie.overview}</span></li>
                    </ul>
                </div>
            </div>
        `
    elements.dialogBody.insertAdjacentHTML('afterbegin', markup);
}
