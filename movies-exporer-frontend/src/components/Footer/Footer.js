import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
            <p className="footer__copyrigh">© 2020</p>
            <a className="footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
            <a className="footer__link" href="https://github.com">Github</a>
            <a className="footer__link" href="https://www.facebook.com">Facebook</a>
        </div>
    )
}

export default Footer;