import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <div id="project" className="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <h3 className="aboutProject__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="aboutProject__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            <h3 className="aboutProject__heading">Дипломный проект включал 5 этапов</h3>
            <p className="aboutProject__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            <p className="aboutProject__progress-bar">1 неделя</p>
            <p className="aboutProject__progress-bar">4 недели</p>
            <p className="aboutProject__progress-title">Back-end</p>
            <p className="aboutProject__progress-title">Front-end</p>
        </div>
    )
}

export default AboutProject;