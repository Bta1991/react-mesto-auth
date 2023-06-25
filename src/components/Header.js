import logoPic from '../images/logo.svg'

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logoPic} alt="Место" />
        </header>
    )
}

export default Header
