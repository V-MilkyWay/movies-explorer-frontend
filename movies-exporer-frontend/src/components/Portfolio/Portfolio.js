import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <p className="portfolio__text">Статичный сайт</p>
            <a className="portfolio__link" href="https://github.com/V-MilkyWay/how-to-learn">↗</a>
            <p className="portfolio__text">Адаптивный сайт</p>
            <a className="portfolio__link" href="https://github.com/V-MilkyWay/russian-travel">↗</a>
            <p className="portfolio__text">Одностраничное приложение</p>
            <a className="portfolio__link" href="https://github.com/V-MilkyWay/react-mesto-api-full">↗</a>
        </div>
    )
}

export default Portfolio;