import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {

    return (
        <div className="header">
            <Link className="header__logo" to="/"></Link>
            <Link className="header__link" to="/movies">
                Фильмы
            </Link>
            <Link className="header__link" to="/saved-movies">
                Сохранённые фильмы
            </Link>
            <Link className="header__link header__link_profile" to="/profile">
                Аккаунт
            </Link>
            <button type="button" onClick={props.openNav} className="header__button"></button>
        </div>
    )
}

export default Header;