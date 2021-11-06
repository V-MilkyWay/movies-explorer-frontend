import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList(props) {
    return (
        <div className="moviesCardList">
            {props.movies.map((movie) => (
            <MoviesCard link={movie.link} name={movie.name} duration={movie.duration} poster={movie.poster} buttonLike ={props.buttonLike} />
            )).reverse()}
            </div>
    )
}

export default MoviesCardList;