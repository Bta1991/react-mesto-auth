import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupAvatar({ isOpen, onClose, onUpdateAvatar }) {
    const ref = React.useRef()

    function handleSubmit(e) {
        e.preventDefault()
        onUpdateAvatar({
            avatar: ref.current.value,
        })
    }

    return (
        <PopupWithForm
            name={'avatarForm'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                name="avatar"
                id="avatar"
                type="url"
                className="popup__input popup__input_data_name"
                placeholder="Введите ссылку на аватар"
                required
                ref={ref}
            />
            <span
                className="popup__error popup__error_visible"
                id="avatar-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupAvatar
