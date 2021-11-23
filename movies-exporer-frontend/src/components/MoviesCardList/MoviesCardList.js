import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    return (
        <div className={props.status}>
            {props.movies.slice(0, (props.showMore < props.movies.length) ? props.showMore : props.movies.length).map((movie) => (
                <MoviesCard isLiked={movie.isLiked} movie={movie} daleteCard={props.daleteCard} description={movie.description}  year={movie.year} country={movie.country} director={movie.director} movieId={movie.id} saveCard={props.saveCard} key={movie.id || movie._id } trailerLink={movie.trailer? movie.trailer : movie.trailerLink} link={movie.image.url? `https://api.nomoreparties.co${movie.image.url}`: movie.image} nameRU={movie.nameRU} nameEN={movie.nameEN} duration={movie.duration} poster={movie.poster} buttonLike={props.buttonLike} />
            ))}
        </div>
    )
}

export default MoviesCardList;