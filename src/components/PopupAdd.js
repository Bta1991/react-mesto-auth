import React from 'react'
import PopupWithForm from './PopupWithForm'
import { useForm } from '../hooks/useForm'

function PopupAdd({ isOpen, onClose, onAddPopup }) {
    const { values, handleChange } = useForm({
        title: '',
        link: '',
    })

    function handleSubmit(e) {
        e.preventDefault()

        onAddPopup({
            title: values.title,
            link: values.link,
        })
    }

    return (
        <PopupWithForm
            name={'addForm'}
            title={'Новое место'}
            buttonText={'Создать'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                name="title"
                id="title"
                minLength="2"
                maxLength="30"
                type="text"
                className="popup__input popup__input_data_title"
                placeholder="Название места"
                required
                onChange={handleChange}
            />
            <span
                className="popup__error popup__error_visible"
                id="name-error"
            ></span>
            <input
                name="link"
                id="link"
                type="url"
                className="popup__input popup__input_data_url"
                placeholder="Ссылка на картинку"
                required
                onChange={handleChange}
            />
            <span
                className="popup__error popup__error_visible"
                id="link-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupAdd
