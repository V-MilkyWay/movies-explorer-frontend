import React from 'react';
import './MoviesCard.css';

function MoviesCard(props) {

    const [like, setLike] = React.useState(false);

    React.useEffect(() => {
        (typeof props.movieId === "undefined")? setLike(true) : setLike(false)
      }, [ props.movieId]);

    function handleClickLike() {
        if (like === false) {
            props.saveCard({
                movieId: props.movieId.toString(),
                nameRU: props.nameRU,
                nameEN: props.nameEN,
                director: props.director,
                thumbnail: props.link,
                country: props.country,
                year: props.year.toString(),
                duration: props.duration.toString(),
                description: props.description,
                trailer: props.trailerLink,
                image: props.link})
            setLike(true)
        } else {
            props.daleteCard(props.movie)
            setLike(false)
        };
    }
    function handleClickDelete(){
        props.daleteCard(props.movie);
        setLike(false);
    }

    function getTimeFromMins(mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        if(minutes === 0) {
            return hours + 'ч';
        } else {
            return hours + 'ч ' + minutes + 'м';
        }
    };

    return (
        <div className="moviesCard">
            <a className="moviesCard__link" href={props.trailerLink}>
                <img className="moviesCard__video" src={props.link} alt={props.nameRU} poster={props.poster} />
            </a>
            <p className="moviesCard__name">{props.nameRU}</p>
            <button className={props.buttonLike === true ? ((typeof props.movieId === "undefined")? 'moviesCard__like moviesCard__like_active' : ((like === true )? 'moviesCard__like moviesCard__like_active' : 'moviesCard__like')) : 'moviesCard__like_hidden'} type="button" onClick={handleClickLike} content='Сохранить'></button>
            <button className={props.buttonLike === false ? "moviesCard__delete" : "moviesCard__delete_hidden"} type="button" onClick={handleClickDelete}></button>
            <p id="number" className="moviesCard__duration">{getTimeFromMins(props.duration)}</p>
        </div>
    )
}

export default MoviesCard;