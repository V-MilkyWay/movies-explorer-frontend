import React from 'react';
import './SearchForm.css';
import icon from '../../images/search-icon.svg';

function SearchForm() {
    return (
        <form className="searchForm">
            <img className="searchForm__icon" src={icon} alt="Поиск" />
            <input className="searchForm__input" type="text" placeholder="Фильм" />
            <button className="searchForm__button" type="submit"></button>
            <hr className="searchForm__line"></hr>
        </form>
    )
}

export default SearchForm;