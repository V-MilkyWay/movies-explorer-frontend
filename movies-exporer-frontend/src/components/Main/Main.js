import React from 'react';
import HeaderPromo from '../HeaderPromo/HeaderPromo.js';
import Promo from '../Promo/Promo.js';
import PromoNavTab from '../PromoNavTab/PromoNavTab.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import './Main.css';

function Main() {
    return (
        <div className="main">
            <HeaderPromo />
            <Promo />
            <PromoNavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
        </div>
    )
}

export default Main;