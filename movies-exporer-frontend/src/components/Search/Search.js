import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Search.css';

function Search(props) {
    return (
        <div className="search">
            <SearchForm setFiltText={props.setFiltText} searchMovies={props.handleClickSearch} />
            <p className="search__text">Короткометражки</p>
            <FilterCheckbox filter={props.filter} handleClickFilterCheckbox={props.handleClickFilterCheckbox} />
        </div>
    )
}

export default Search;