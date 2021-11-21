import React from 'react';
import './SearchForm.css';
import icon from '../../images/search-icon.svg';

function SearchForm(props) {
    
    const [input, setValue] = React.useState("");

    function handleChangeSearchForm(e) {
        setValue(e.target.value);
        props.setFiltText(e.target.value)
    }

    function handleClickButtonSearch(e) {
        e.preventDefault();
        if (input === '') {
            setValue('Нужно ввести ключевое слово')
            props.setFiltText('Нужно ввести ключевое слово')
        } else {
            props.searchMovies(e);
        };
    }

    return (
        <form className="searchForm">
            <img className="searchForm__icon" src={icon} alt="Поиск" />
            <input className="searchForm__input" onChange={handleChangeSearchForm} value={input} type="text" placeholder="Фильм" required />
            <button className="searchForm__button" onClick={(e) => handleClickButtonSearch(e)} type="submit"></button>
            <hr className="searchForm__line"></hr>
        </form>
    )
}

export default SearchForm;