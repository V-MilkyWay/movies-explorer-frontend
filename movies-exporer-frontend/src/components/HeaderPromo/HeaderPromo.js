import React from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../../images/header_logo1.svg';
import './HeaderPromo.css';

function HeaderPromo() {
    return (
        <div className="headerPromo">
            <img className="headerPromo__logo" src={logoMain} alt="Promo-logo" />
            <Link className="headerPromo__link-signup" to="/signup">
                Регистрация
            </Link>
            <Link className="headerPromo__link-signin" to="/signin">Войти</Link>
        </div>
    )
}

export default HeaderPromo;