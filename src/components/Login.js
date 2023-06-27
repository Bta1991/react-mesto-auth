import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import * as auth from '../auth.js';
// import './styles/Login.css';

const Login = () => {
    // const Login = ({handleLogin}) => {
    //   const [formValue, setFormValue] = useState({
    //     username: '',
    //     password: ''
    //   })
    //   const navigate = useNavigate();

    //   const handleChange = (e) => {
    //     const {name, value} = e.target;

    //     setFormValue({
    //       ...formValue,
    //       [name]: value
    //     });
    //   }
    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!formValue.username || !formValue.password){
    //       return;
    //     }
    //     auth.authorize(formValue.username, formValue.password)
    //       .then((data) => {
    //         if (data.jwt){
    //           setFormValue({username: '', password: ''});
    //           handleLogin();
    //           navigate('/diary', {replace: true});
    //         }
    //       })
    //       .catch(err => console.log(err));
    //   }

    return (
        <div className="authorization">
            <h2 className="authorization__header">Вход</h2>
            {/* <form onSubmit={handleSubmit} className="login__form"> */}
            <form className="authorization__form">
                {/* <input required id="username" name="username" type="text" value={formValue.username} onChange={handleChange} /> */}
                <input
                    required
                    className="authorization__input"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    // value={values.email}
                    // onChange={handleChange}
                />
                {/* <input required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} /> */}
                <input
                    required
                    className="authorization__input authorization__input-gap"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    // value={values.password}
                    // onChange={handleChange}
                />
                <button type="submit" className="authorization__button">
                    Войти
                </button>
            </form>
        </div>
    )
}

export default Login
