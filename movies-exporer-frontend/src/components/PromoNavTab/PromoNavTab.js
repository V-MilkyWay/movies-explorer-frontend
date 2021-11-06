import React from 'react';
import './PromoNavTab.css';

function PromoNavTab() {
    return (
        <div className="promoNavTab">
            <a className="promoNavTab__link" href="#project">
                О проекте
            </a>
            <a className="promoNavTab__link" href="#techs">
                Технологии
            </a>
            <a className="promoNavTab__link" href="#student">
                Студент
            </a>
        </div>
    )
}

export default PromoNavTab;