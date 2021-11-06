import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-auth.svg';
import './Login.css';

function Login() {

    const [input, setValue] = React.useState({ user: 'Владислав', email: 'Radshura@yandex.ru', password: 12345678 });

    function handleChange(e) {
        const { name, value } = e.target;
        setValue({
            [name]: value
        });
    }

    return (
        <form id="login" name="login" className="login" noValidate>
            <img className="login__logo" src={logo} alt="logo" />
            <h2 className="login__welcome">Рады видеть!</h2>
            <p className="login__title">E-mail</p>
            <input id="login-input" value={input.email} onChange={handleChange} name="email" type="email" className="login__input" placeholder="Email" required minLength="2" maxLength="40" />
            <p className="login__title">Пароль</p>
            <input id="password-input" value={input.password} onChange={handleChange} name="password" type="password" className="login__input" placeholder="Пароль" required minLength="2" maxLength="200" />
            <span className="login__input-error"></span>
            <button type="submit" className="login__button-login">Войти</button>
            <p className="login__text">Ещё не зарегистрированы?</p>
            <Link className="login__link" to="/signup">Регистрация</Link>
        </form>
    )
}

export default Login;