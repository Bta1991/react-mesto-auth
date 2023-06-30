import React from 'react'
import okPic from '../images/access-granted.svg'
import rejectPic from '../images/access-denied.svg'

function InfoTooltip({ isOpen, status, text, onClose }) {
    const popupClass = `popup ${isOpen ? 'popup_opened' : ''}`

    return (
        <div className={popupClass}>
            <div className="popup__container">
                <img
                    src={status ? okPic : rejectPic}
                    className="popup__info-icon"
                    alt="иконка"
                />
                <h2 className="popup__info-text">
                    {text}
                    {/* {status
                        ? 'Вы успешно зарегистрировались!'
                        : 'Что-то пошло не так! Попробуйте ещё раз.'} */}
                </h2>
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )
}
export default InfoTooltip
