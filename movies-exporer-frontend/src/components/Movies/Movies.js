import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import {movies} from '../../utils/constans.js'
import './Movies.css';

function Movies() {
    return (
        <div className="movies">
            <SearchForm />
            <p className="movies__text">Короткометражки</p>
            <FilterCheckbox />
            <hr className="movies__line"></hr>
            <MoviesCardList buttonLike={true} movies={movies}/>
            <button className="movies__button" type="button" >Ещё</button>
            <span className="movies__saveddevider"></span>
        </div>
    )
}

export default Movies;