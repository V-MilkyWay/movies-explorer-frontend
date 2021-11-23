import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errMessage, setErrMessage] = React.useState("");
    const [errStatName, setErrStatName] = React.useState(false);
    const [errStatEmail, setErrStatEmail] = React.useState(false);
    const [errStatPassword, setErrStatPassword] = React.useState(false);


    function onChangeTagInputName(e) {
        setName(e.target.value.replace(/[^\-a-zA-Zа-яА-ЯЁё\s]/, ""));
        name === "" ? setErrMessage('Введены некоректные данные') : setErrMessage("");
        name === "" ? setErrStatName(true) : setErrStatName(false);
    }
    function onChangeTagInputEmail(e) {
        setEmail(e.target.value);
        !/\S+@\S+\.\S+/.test(e.target.value) ? setErrMessage('Email введен неверно') : setErrMessage("");
        !/\S+@\S+\.\S+/.test(e.target.value) ? setErrStatEmail(true) : setErrStatEmail(false);
    }

    function onChangeTagInputPass(e) {
        setPassword(e.target.value);
        password.length < 7 ? setErrMessage('Слишком короткий пароль, (меньше 8 символов)') : setErrMessage("");
        password.length < 7 ? setErrStatPassword(true) : setErrStatPassword(false)
    }

    function handleRegisterClick(e) {
        e.preventDefault();
        props.handleRegister(name, email, password)
        setErrMessage("Отправка...")
        setTimeout(() => {
            setErrMessage("Ошибка отправки, попробуйте другой Email")
            setTimeout(() => {
                setErrMessage("")
            }, 2000);
        }, 2000);
    }

    return (
        <form id="auth" name="auth" className="register" noValidate>
            <Link className="register__logo" to="/"></Link>
            <h2 className="register__welcome">Добро пожаловать!</h2>
            <p className="register__title">Имя</p>
            <input id="name-input" value={name} onChange={(e) => onChangeTagInputName(e)} name="name" type="text" className={errStatName === false ? "register__input" : "register__input register__input_error"} placeholder="Имя" required minLength="2" maxLength="40" />
            <p className="register__title">E-mail</p>
            <input id="login-input" value={email} onChange={(e) => onChangeTagInputEmail(e)} name="email" type="email" className={errStatEmail === false ? "register__input" : "register__input register__input_error"} placeholder="Email" required minLength="2" maxLength="40" />
            <p className="register__title">Пароль</p>
            <input id="password-input" value={password} onChange={(e) => onChangeTagInputPass(e)} name="password" type="password" className={(errStatPassword === false) && (password.length > 7) ? "register__input" : "register__input register__input_error"} placeholder="Пароль" required minLength="2" maxLength="40" />
            <span className="register__input-error">{errMessage || props.statServer}</span>
            <button onClick={(e) => ((errStatName === false) && (errStatEmail === false) && (errStatPassword === false) && (name !== "") && (email !== "") && (password !== "") && (password.length > 7)) ? handleRegisterClick(e) : e.preventDefault()} type="submit" className={((errStatName === false) && (errStatEmail === false) && (errStatPassword === false) && (name !== "") && (email !== "") && (password !== "") && (password.length > 7)) ? "register__button-login" : "register__button-login register__button-login_unactive"}>Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрировались?</p>
            <Link className="register__link" to="/signin"> Войти</Link>
        </form>
    )
}

export default Register;