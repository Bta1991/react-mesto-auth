import React, { useContext } from 'react'
import Card from './Card'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    cards,
    onCardClick,
    onCardLike,
    onDeleteClick,
}) {
    const currentUser = useContext(CurrentUserContext)

    // Check if `cards` is null or undefined
    if (!cards) {
        return null
    }

    const renderCards = () => {
        return cards.map((item) => (
            <Card
                key={item._id}
                card={item}
                onCardClick={onCardClick}
                onCardLike={onCardLike}
                onDeleteClick={onDeleteClick}
            />
        ))
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-area">
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
                        alt="Фото пользователя"
                    />
                    <button
                        type="button"
                        className="profile__avatar-edit"
                        aria-label="Редактировать аватар профиля"
                        onClick={onEditAvatar}
                    ></button>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            type="button"
                            className="profile__edit"
                            aria-label="Редактировать профиль"
                            onClick={onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>
                <button
                    type="button"
                    className="profile__add-button"
                    aria-label="Добавить фото"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="elements">{renderCards()}</section>
        </main>
    )
}

export default Main
