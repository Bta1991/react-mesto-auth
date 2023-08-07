import React, { useState, useForm } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../utils/Auth'

const Register = ({ handleTooltip, handleStatus, handeTextTooltip }) => {
    const [values, setFormValue] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFormValue((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = (e) => {
        const { email, password, confirmPassword } = values

        e.preventDefault()
        if (password !== confirmPassword) {
            setErrorMessage('Введите идентичные пароли!')
            return
        }
        register(email, password)
            .then((data) => {
                navigate('/sign-in')
                handleStatus(true)
                handleTooltip(true)
                handeTextTooltip('Вы успешно зарегистрировались!')
            })
            .catch((err) => {
                handeTextTooltip(err)
                handleStatus(false)
                handleTooltip(true)
            })
    }

    return (
        <div className="authorization">
            <h2 className="authorization__header">Регистрация</h2>
            <form className="authorization__form" onSubmit={handleSubmit}>
                <input
                    required
                    className="authorization__input"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    value={values.email}
                    onChange={handleChange}
                />
                <input
                    required
                    className="authorization__input"
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Пароль"
                    value={values.password}
                    onChange={handleChange}
                />
                {/* добавлено подтверждение пароля */}
                <input
                    required
                    className="authorization__input authorization__input-smallgap"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Введите пароль ещё раз"
                    value={values.confirmPassword}
                    onChange={handleChange}
                />

                <button type="submit" className="authorization__button">
                    {errorMessage || 'Зарегистрироваться'}
                </button>

                <Link to="/sign-in" className="authorization__link">
                    Уже зарегистрированы? Войти
                </Link>
            </form>
        </div>
    )
}

export default Register
