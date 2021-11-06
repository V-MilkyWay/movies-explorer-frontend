import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    const [like, setLike] = React.useState(false);

    function handleClick() {
        if (like === false) {
            setLike(true)
        } else {
            setLike(false)
        };
    }

    return (
        <div className="moviesCard">
            <video className="moviesCard__video" src={props.link} controls poster={props.poster}></video>
            <p className="moviesCard__name">{props.name}</p>
            <button className={props.buttonLike === true ? (like === true ? 'moviesCard__like moviesCard__like_active' : 'moviesCard__like') : 'moviesCard__like_hidden'} type="button" onClick={handleClick}></button>
            <button className={props.buttonLike === false ? "moviesCard__delete" : "moviesCard__delete_hidden"} type="button"></button>
            <hr className="moviesCard__line"></hr>
            <p id="number" className="moviesCard__duration">{props.duration}</p>
        </div>
    )
}

export default MoviesCard;