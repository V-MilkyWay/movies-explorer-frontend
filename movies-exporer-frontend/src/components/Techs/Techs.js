import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <div id="techs" className="techs">
            <h2 className="techs__title">Технологии</h2>
            <h3 className="techs__heading">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <p className="techs__name">HTML</p>
            <p className="techs__name">CSS</p>
            <p className="techs__name">JS</p>
            <p className="techs__name">React</p>
            <p className="techs__name">Git</p>
            <p className="techs__name">Express.js</p>
            <p className="techs__name">mongoDB</p>
        </div>
    )
}

export default Techs;