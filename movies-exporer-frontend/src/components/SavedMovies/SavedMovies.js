import React from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies(props) {

    return (
        <>
            <Navigation isOpen={props.isOpen}
                handleClickCloseNavTab={props.handleClickCloseNavTab}
                status={props.status} />
            <Header statusHeader={props.loggedIn} />
            <div className="savedMovies">
                <Search setFiltText={props.setFiltText} filter={props.filter} handleClickSearch={props.searchSavedCards} handleClickFilterCheckbox={props.handleClickFilterCheckbox} />
                <hr className="savedMovies__line"></hr>
                <h2 className={(props.statResult === true) ? 'savedMovies__resilt-title' : 'savedMovies__resilt-title__hidden'}>{props.message}</h2>
                <MoviesCardList daleteCard={props.handleClickDeleteMovie} buttonLike={false} showMore={props.showMore} status={(props.statMovies === true) ? 'moviesCardList' : 'moviesCardList__hidden'} movies={props.likedCards} />
                <button className="savedMovies__button savedMovies__button_hidden" type="button" >Ещё</button>
                <span className="savedMovies__saveddevider"></span>
            </div>
            <Footer />
        </>
    )
}

export default SavedMovies;