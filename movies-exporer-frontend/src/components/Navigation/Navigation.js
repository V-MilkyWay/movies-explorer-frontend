import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

function Navigation(props) {

    return (
        <div className={props.isOpen === false ? "navigation_hidden" : "navigation"}>
            <div className="nav-links">
                <button type="button" onClick={props.handleClickCloseNavTab} className="nav-links__close-button"></button>
                <Link className={props.status === 'main' ? "nav-links__link nav-links__link_actual" : "nav-links__link"} to="/">
                    Главная
                </Link>
                <Link className={props.status === 'movies' ? "nav-links__link nav-links__link_actual" : "nav-links__link"} to="/movies">
                    Фильмы
                </Link>
                <Link className={props.status === 'saved-movies' ? "nav-links__link nav-links__link_actual" : "nav-links__link"} to="/saved-movies">
                    Сохранённые фильмы
                </Link>
                <Link className="nav-links__link nav-links_profile" to="/profile">
                    Аккаунт
                </Link>
            </div>
        </div>
    )
}

export default Navigation;