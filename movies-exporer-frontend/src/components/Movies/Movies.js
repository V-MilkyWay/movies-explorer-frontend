import React from 'react';
import Search from '../Search/Search';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies(props) {

    return (
        <>
        <Navigation isOpen={props.isOpen}
          handleClickCloseNavTab={props.handleClickCloseNavTab}
          status={props.status} />
        <Header openNav={props.openNav} />
        <div className="movies">
            <Search setFiltText={props.setFiltText} filter={props.filter} handleClickSearch={props.initialCards} handleClickFilterCheckbox={props.handleClickFilterCheckbox} />
            <hr className="movies__line"></hr>
            <Preloader status={(props.statPreload === true) ? 'preloader' : 'preloader__hidden'} />
            <h2 className={(props.statResult === true) ? 'movies__resilt-title' : 'movies__resilt-title__hidden'}>{props.message}</h2>
            <MoviesCardList daleteCard={props.handleClickDeleteMovie} saveCard={props.handleClickSaveMovie} showMore={props.showMore} status={(props.statMovies === true) ? 'moviesCardList' : 'moviesCardList__hidden'} buttonLike={true} movies={props.savedCards} />
            <button onClick={props.handleClickShowMore} className={(props.statButton === true) ? 'movies__button' : 'movies__button__hidden'} type="button" >Ещё</button>
            <span className={(props.statButton === false) ? 'movies__saveddevider' : 'movies__saveddevider__hidden'}></span>
        </div>
        <Footer />
        </>
    )
}

export default Movies;