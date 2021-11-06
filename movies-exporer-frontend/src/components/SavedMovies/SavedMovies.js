import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {savedMovies} from '../../utils/constans.js';
import './SavedMovies.css';

function SavedMovies() {
   
    return (
        <div className="savedMovies">
            <SearchForm />
            <p className="savedMovies__text">Короткометражки</p>
            <FilterCheckbox />
            <hr className="savedMovies__line"></hr>
            <MoviesCardList buttonLike={false} movies={savedMovies} />
            <button className="savedMovies__button savedMovies__button_hidden" type="button" >Ещё</button>
            <span className="savedMovies__saveddevider"></span>
        </div>
    )
}

export default SavedMovies;