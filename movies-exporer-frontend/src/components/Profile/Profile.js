import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {

    const [redact, setRedact] = React.useState(false);
    const [ input, setValue] = React.useState({user: 'Владислав', email: 'Radshura@yandex.ru'});

    function handleRedactClick() {
        setRedact(true)
    };

    function handleChange(e) {
        const { name, value } = e.target;
        setValue({
            [name]: value
        });
    }

    return (
        <form className="profile">
            <h2 className="profile__title">Привет, Владислав!</h2>
            <p className="profile__text">Имя</p>
            <p className={ redact === true ? "profile__text_hidden" : "profile__text"}>Владислав</p>
            <input className={ redact === false ? "profile__text_hidden" : "profile__text"} id="name-input" value={input.user} name="user" type="text" onChange={handleChange} placeholder="Имя" required minLength="2" maxLength="40" />
            <hr className="profile__line"></hr>
            <p className="profile__text">E-mail</p>
            <p className={ redact === true ? "profile__text_hidden" : "profile__text"}>Radshura@yandex.ru</p>
            <input className={ redact === false ? "profile__text_hidden" : "profile__text"} id="email-input" value={input.email} name="email" type="E-mail" onChange={handleChange} placeholder="E-mail" required minLength="2" maxLength="50" />
            <button type="button" className={ redact === true ? "profile__redact_hidden" : "profile__redact"} onClick={handleRedactClick}>Редактировать</button>
            <Link className={ redact === true ? "profile__exit_hidden" : "profile__exit"} to='signin'>Выйти из аккаунта</Link>
            <span className={ redact === false ? "profile__error_hidden" : "profile__error"}>При обновлении профиля произошла ошибка.</span>
            <button type="submit" className={ redact === false ? "profile__save_hidden" : "profile__save profile__save_unactive"}>Сохранить</button>
        </form>
    )
}

export default Profile;