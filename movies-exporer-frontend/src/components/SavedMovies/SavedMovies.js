import React from 'react';
import Search from '../Search/Search';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import {savedMovies} from '../../utils/constans.js';
import './SavedMovies.css';

function SavedMovies() {
   
    return (
        <div className="savedMovies">
            <Search />
            <hr className="savedMovies__line"></hr>
            <MoviesCardList buttonLike={false} movies={savedMovies} />
            <button className="savedMovies__button savedMovies__button_hidden" type="button" >Ещё</button>
            <span className="savedMovies__saveddevider"></span>
        </div>
    )
}

export default SavedMovies;