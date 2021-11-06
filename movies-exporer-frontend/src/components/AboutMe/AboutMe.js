import React from 'react';
import './AboutMe.css';
import avatar from '../../images/avatar.svg'

function AboutMe() {
    return (
        <div id="student" className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <p className="aboutMe__name">Владислав</p>
            <p className="aboutMe__info">Фронтенд-разработчик, 25 лет</p>
            <p className="aboutMe__text">Я живу в Санкт-Петербурге, закончил факультет экономики СГУ. Люблю слушать музыку, читать книги, а ещё увлекаюсь плаванием. Недавно начал кодить. С 2015 года работал в компании «ОАО Сохо». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <a className="aboutMe__link" href="https://www.facebook.com/">Facebook</a>
            <a className="aboutMe__link" href="https://github.com/V-MilkyWay">Github</a>
            <img className="aboutMe__avatar" src={avatar} alt='Аватарка' />
        </div>
    )
}

export default AboutMe;