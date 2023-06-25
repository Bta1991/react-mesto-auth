import React from 'react'

function ImagePopup({ card, onClose }) {
    const popupClass = `popup popup_view ${card ? 'popup_opened' : ''}`

    return (
        <div className={popupClass}>
            <div className="popup__photo">
                <figure className="popup__figure">
                    <img
                        src={card?.link}
                        className="popup__image"
                        alt={card?.name}
                    />
                    <figcaption className="popup__photo-title">
                        {card?.name}
                    </figcaption>
                </figure>
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Close Popup"
                    onClick={onClose}
                ></button>
            </div>
        </div>
    )
}
export default ImagePopup
