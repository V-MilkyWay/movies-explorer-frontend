import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import './Profile.css';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState(currentUser.name);
    const [email, setEmail] = React.useState(currentUser.email);
    const [errStatName, setErrStatName] = React.useState(false);
    const [errStatEmail, setErrStatEmail] = React.useState(false);
    const [errMessage, setErrMessage] = React.useState("");

    function onChangeTagInputName(e) {
        setName(e.target.value.replace(/[^\-a-zA-Zа-яА-ЯЁё\s]/, ""));
        name === "" ? setErrMessage('Введены некоректные данные') : setErrMessage("");
        name === "" ? setErrStatName(true) : setErrStatName(false);
    }
    function onChangeTagInputEmail(e) {
        setEmail(e.target.value);
        !/\S+@\S+\.\S+/.test(email) ? setErrMessage('Email введен неверно') : setErrMessage("");
        !/\S+@\S+\.\S+/.test(email) ? setErrStatEmail(true) : setErrStatEmail(false);
    }
    function handleRedactClick(){
    props.onRedactClick()
    setErrMessage(" ")
    }
    function handleClickUpdateUser(e) {
        e.preventDefault();
        props.handleUpdateUser({ name: name, email: email })
        setErrMessage("Отправка...")
        setTimeout(() => {
            setErrMessage("")
        }, 2000);
    }

    return (
        <>
        <Navigation />
        <Header />
        <form className="profile">
            <h2 className="profile__title">Привет, {currentUser.name}!</h2>
            <p className="profile__text">Имя</p>
            <p className={props.isRedact === true ? "profile__text_hidden" : "profile__text"}>{currentUser.name}</p>
            <input onChange={(e) => onChangeTagInputName(e)} className={props.isRedact === false ? "profile__text_hidden" : (errStatName === false ? "profile__text" : "profile__text profile__text_error")} id="name-input" value={name} name="user" type="text" placeholder="Имя" required minLength="2" maxLength="40" />
            <hr className="profile__line"></hr>
            <p className="profile__text">E-mail</p>
            <p className={props.isRedact === true ? "profile__text_hidden" : "profile__text"}>{currentUser.email}</p>
            <input onChange={(e) => onChangeTagInputEmail(e)} className={props.isRedact === false ? "profile__text_hidden" : (errStatEmail === false ? "profile__text" : "profile__text profile__text_error")} id="email-input" value={email} name="email" type="E-mail" placeholder="E-mail" required minLength="2" maxLength="50" />
            <button type="button" className={props.isRedact === true ? "profile__redact_hidden" : "profile__redact"} onClick={handleRedactClick}>Редактировать</button>
            <Link onClick={props.signOut} className={props.isRedact === true ? "profile__exit_hidden" : "profile__exit"} to='signin'>Выйти из аккаунта</Link>
            <span className={props.isRedact === false ? "profile__error_hidden" : "profile__error"}>{errMessage || props.statServer}</span>
            <button onClick={(e) => ((errStatName === false) && (errStatEmail === false) && ((name !== currentUser.name) || (email !== currentUser.email)) && (name.length > 1)) ? handleClickUpdateUser(e) : e.preventDefault()} type="submit" className={props.isRedact === false ? "profile__save_hidden" : ((errStatName === false) && (errStatEmail === false) && ((name !== currentUser.name) || (email !== currentUser.email)) && (name.length > 1)) ? "profile__save" : "profile__save profile__save_unactive"}>Сохранить</button>
        </form>
        </>
    )
}

export default Profile;