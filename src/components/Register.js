import React from 'react'
import { Link } from 'react-router-dom'
// import './styles/Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            calGoal: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // здесь обработчик регистрации
    }
    render() {
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
                        // value={this.state.email}
                        // onChange={this.handleChange}
                    />
                    <input
                        className="authorization__input"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        // value={this.state.password}
                        // onChange={this.handleChange}
                    />

                    <button
                        type="submit"
                        // onSubmit={this.handleSubmit}
                        className="authorization__button"
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
}

export default Register
