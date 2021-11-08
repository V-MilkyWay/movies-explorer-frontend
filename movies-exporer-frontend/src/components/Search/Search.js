import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './Search.css';

function Search() {
    return (
        <div className="search">
            <SearchForm />
            <p className="search__text">Короткометражки</p>
            <FilterCheckbox />
        </div>
    )
}

export default Search;