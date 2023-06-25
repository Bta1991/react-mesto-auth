import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupDelete({ isOpen, onClose, onCardDelete }) {
    function handleSubmit(e) {
        e.preventDefault()
        onCardDelete()
    }

    return (
        <PopupWithForm
            name={'deleteForm'}
            title={'Вы уверены?'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        ></PopupWithForm>
    )
}
export default PopupDelete
