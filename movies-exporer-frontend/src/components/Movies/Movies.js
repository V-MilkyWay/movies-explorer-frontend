import React from 'react';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import {movies} from '../../utils/constans.js'
import './Movies.css';

function Movies() {
    return (
        <div className="movies">
            <Search />
            <hr className="movies__line"></hr>
            <MoviesCardList buttonLike={true} movies={movies}/>
            <button className="movies__button" type="button" >Ещё</button>
            <span className="movies__saveddevider"></span>
        </div>
    )
}

export default Movies;