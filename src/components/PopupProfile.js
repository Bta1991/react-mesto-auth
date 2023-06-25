import React from 'react'
import PopupWithForm from './PopupWithForm'
import CurrentUserContext from '../contexts/CurrentUserContext'
import { useForm } from '../hooks/useForm'

function PopupProfile({ isOpen, onClose, onUpdateUser }) {
    const currentUser = React.useContext(CurrentUserContext)
    const { values, handleChange, setValues } = useForm({
        name: '',
        about: '',
    })

    React.useEffect(() => {
        setValues({
            name: currentUser.name,
            about: currentUser.about,
        })
    }, [currentUser])

    function handleSubmit(e) {
        e.preventDefault()
        onUpdateUser({
            name: values.name,
            about: values.about,
        })
    }

    return (
        <PopupWithForm
            name={'editForm'}
            title={'Редактировать профиль'}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <input
                name="name"
                id="name"
                minLength="2"
                maxLength="40"
                type="text"
                className="popup__input popup__input_data_user"
                placeholder="Имя"
                required
                value={values.name || ''}
                onChange={handleChange}
            />
            <span
                className="popup__error popup__error_visible"
                id="user-error"
            ></span>
            <input
                name="about"
                id="about"
                minLength="2"
                maxLength="200"
                type="text"
                className="popup__input popup__input_data_about"
                placeholder="О себе"
                required
                value={values.about || ''}
                onChange={handleChange}
            />
            <span
                className="popup__error popup__error_visible"
                id="about-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupProfile
