import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setState((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // здесь обработчик регистрации
    }

    return (
        <div className="authorization">
            <h2 className="authorization__header">Регистрация</h2>
            {/* <form onSubmit={this.handleSubmit} className="register__form"> */}
            <form className="authorization__form">
                <input
                    className="authorization__input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={state.email}
                    onChange={handleChange}
                />
                <input
                    className="authorization__input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={state.password}
                    onChange={handleChange}
                />
                {/* добавлена проверка пароля */}
                <input
                    className="authorization__input authorization__input-smallgap"
                    id="password2"
                    name="password2"
                    type="password2"
                    placeholder="Введите пароль ещё раз"
                    value={state.password}
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="authorization__button"
                    onClick={handleSubmit}
                >
                    Зарегистрироваться
                </button>
                <Link to="/sign-in" className="authorization__link">
                    Уже зарегистрированы? Войти
                </Link>
            </form>
        </div>
    )
}

export default Register
