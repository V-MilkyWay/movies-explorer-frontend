import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-auth.svg';
import './Register.css';

function Register() {

    const [input, setValue] = React.useState({ user: 'Владислав', email: 'Radshura@yandex.ru', password: 12345678 });

    function handleChange(e) {
        const { name, value } = e.target;
        setValue({
            [name]: value
        });
    }

    return (
        <form id="auth" name="auth" className="register" noValidate>
            <img className="register__logo" src={logo} alt="Promo-logo" />
            <h2 className="register__welcome">Добро пожаловать!</h2>
            <p className="register__title">Имя</p>
            <input id="name-input" value={input.user} onChange={handleChange} name="name" type="text" className="register__input" placeholder="Имя" required minLength="2" maxLength="40" />
            <p className="register__title">E-mail</p>
            <input id="login-input" value={input.email} onChange={handleChange} name="email" type="email" className="register__input" placeholder="Email" required minLength="2" maxLength="40" />
            <p className="register__title">Пароль</p>
            <input id="password-input" value={input.password} onChange={handleChange} name="password" type="password" className="register__input" placeholder="Пароль" required minLength="2" maxLength="200" />
            <span className="register__input-error">Что-то пошло не так...</span>
            <button type="submit" className="register__button-login">Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрировались?</p>
            <Link className="register__link" to="/signin"> Войти</Link>
        </form>
    )
}

export default Register;