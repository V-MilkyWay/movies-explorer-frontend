import React from 'react';
import './SearchForm.css';

function SearchForm() {
    return (
        <form className="searchForm">
            <input className="searchForm__input" type="text" placeholder="Фильм" />
            <button className="searchForm__button" type="submit"></button>
        </form>
    )
}

export default SearchForm;