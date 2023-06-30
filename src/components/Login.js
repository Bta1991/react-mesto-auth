import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authorize } from '../utils/Auth'

const Login = ({
    handleLogin,
    handleTooltip,
    handleStatus,
    handeTextTooltip,
    setUserEmail,
}) => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValue({
            ...formValue,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        const { email, password } = formValue

        e.preventDefault()

        if (!email || !password) {
            return
        }

        authorize(email, password)
            .then((data) => {
                localStorage.setItem('jwt', data.token)
                handleLogin(true)
                setUserEmail(email)
                handleStatus(true)
                handleTooltip(true)
                handeTextTooltip('Вы восхитительны!')
                navigate('/')
            })
            .catch((err) => {
                handleStatus(false)
                handeTextTooltip(err)
                handleTooltip(true)
            })
    }

    return (
        <div className="authorization">
            <h2 className="authorization__header">Вход</h2>
            <form className="authorization__form" onSubmit={handleSubmit}>
                <input
                    required
                    className="authorization__input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formValue.email}
                    onChange={handleChange}
                />
                <input
                    required
                    className="authorization__input authorization__input-gap"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <button type="submit" className="authorization__button">
                    Войти
                </button>
            </form>
        </div>
    )
}

export default Login
