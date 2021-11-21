import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox(props) {
    return (
        <label className="filterCheckbox">
                <input onChange={props.handleClickFilterCheckbox} checked={props.filter} className="filterCheckbox__input" type="checkbox" />
                <span className="filterCheckbox__slider"></span>
        </label>
    )
}

export default FilterCheckbox;