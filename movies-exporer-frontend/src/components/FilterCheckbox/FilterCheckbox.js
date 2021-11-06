import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox() {
    return (
        <label className="filterCheckbox">
                <input className="filterCheckbox__input" type="checkbox" />
                <span className="filterCheckbox__slider"></span>
        </label>
    )
}

export default FilterCheckbox;