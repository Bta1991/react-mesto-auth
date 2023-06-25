import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

function Card({ card, onCardClick, onCardLike, onDeleteClick }) {
    const currentUser = React.useContext(CurrentUserContext)

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner?._id === currentUser._id

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some((i) => i._id === currentUser._id)

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `element__like ${
        isLiked && 'element__like_active'
    }`
    // Переменная на случай если картинка будет без имени
    const altText = card.name || 'Изображение'

    function handleClick() {
        onCardClick(card)
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onDeleteClick(card)
    }

    return (
        <article className="element">
            <div className="element__container">
                <img
                    className="element__photo"
                    src={card.link}
                    alt={altText}
                    onClick={handleClick}
                />
                {isOwn && (
                    <button
                        className="element__trash"
                        aria-label="Удалить фото"
                        onClick={handleDeleteClick}
                    ></button>
                )}
            </div>
            <div className="element__info">
                <h2 className="element__text">{altText}</h2>
                <div className="element__like-area">
                    <button
                        type="button"
                        className={cardLikeButtonClassName}
                        aria-label="Лайкнуть фото"
                        onClick={handleLikeClick}
                    ></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card
