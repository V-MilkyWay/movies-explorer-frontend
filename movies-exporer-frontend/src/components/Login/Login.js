import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(props) {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [errMessage, setErrMessage] = React.useState("");
    const [errStatEmail, setErrStatEmail] = React.useState(false);
    const [errStatPassword, setErrStatPassword] = React.useState(false);

    function onChangeTagInputEmail(e) {
        setEmail(e.target.value);
        !/\S+@\S+\.\S+/.test(e.target.value)? setErrMessage('Email введен неверно') : setErrMessage("");
        !/\S+@\S+\.\S+/.test(e.target.value) ? setErrStatEmail(true) : setErrStatEmail(false);
    }
    function onChangeTagInputPass(e) {
        setPassword(e.target.value);
        password.length < 7 ? setErrMessage('Слишком короткий пароль (меньше 8 символов)') : setErrMessage("");
        password.length < 7 ? setErrStatPassword(true) : setErrStatPassword(false)
    }

    function handleLoginClick(e){
        e.preventDefault();
        props.handleLogin(email, password)
        setErrMessage("Отправка...")
        setTimeout(() => {
            setErrMessage("")
        }, 2000);
    }

    return (
        <form id="login" name="login" className="login" noValidate>
            <Link className="login__logo" to="/"></Link>
            <h2 className="login__welcome">Рады видеть!</h2>
            <p className="login__title">E-mail</p>
            <input id="login-input" value={email} onChange={ onChangeTagInputEmail} name="email" type="email" className={errStatEmail === false ? "login__input" : "login__input login__input_error"} placeholder="Email" required minLength="2" maxLength="40" />
            <p className="login__title">Пароль</p>
            <input id="password-input" value={password} onChange={onChangeTagInputPass} name="password" type="password" className={errStatPassword === false ? "login__input" : "login__input login__input_error"} placeholder="Пароль" required minLength="2" maxLength="200" />
            <span className="login__input-error">{errMessage || props.statServer}</span>
            <button onClick={(e) => ((errStatEmail === false) && (errStatPassword === false) && (email !== "") && (password !== "") && (password.length > 7)) ? handleLoginClick(e) :  e.preventDefault()} type="submit" className={((errStatEmail === false) && (errStatPassword === false) && (email !== "") && (password !== "") && (password.length > 7)) ? "login__button-login" : "login__button-login login__button-login_unactive"}>Войти</button>
            <p className="login__text">Ещё не зарегистрированы?</p>
            <Link className="login__link" to="/signup">Регистрация</Link>
        </form>
    )
}

export default Login;