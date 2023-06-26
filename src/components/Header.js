import logoPic from '../images/logo.svg'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoPic} alt="Место" />
            <Routes>
                <Route
                    path="/sign-up"
                    element={
                        <Link to="/sign-in" className="header__auth">
                            Войти
                        </Link>
                    }
                />
                <Route
                    path="/sign-in"
                    element={
                        <Link to="/sign-up" className="header__auth">
                            Регистрация
                        </Link>
                    }
                />
                <Route
                    path="/"
                    element={
                        <>
                            <div className="header__auth">
                                <p className="header__email">тут имейл</p>
                                {/* <p className="identification__email">{userEmail}</p> */}

                                <Link
                                    to="/sign-in"
                                    className="header__logout"
                                    // onClick={handleSignout}
                                >
                                    Выйти
                                </Link>
                            </div>
                        </>
                    }
                />
            </Routes>
        </header>
    )
}

export default Header
