import React, { useState, useEffect, useCallback } from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import Login from './Login'
import Register from './Register'
import { ProtectedRoute } from './ProtectedRoute'
import PopupAvatar from './PopupAvatar'
import PopupProfile from './PopupProfile'
import PopupAdd from './PopupAdd'
import PopupDelete from './PopupDelete'
import ImagePopup from './ImagePopup'
import CurrentUserContext from '../contexts/CurrentUserContext'
import api from '../utils/Api'

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])
    const [selectedCard, setSelectedCard] = useState(null)
    const [cardToDelete, setCardToDelete] = useState(null)
    const [isLoggedIn, setLoggedIn] = useState(false)

    const handleEditProfileClick = useCallback(() => {
        setIsEditProfilePopupOpen(true)
    }, [])
    const handleAddPlaceClick = useCallback(() => {
        setIsAddPlacePopupOpen(true)
    }, [])
    const handleEditAvatarClick = useCallback(() => {
        setIsEditAvatarPopupOpen(true)
    }, [])
    const handleCardClick = useCallback((card) => {
        setSelectedCard(card)
    }, [])
    const handleDeleteClick = useCallback((card) => {
        setIsCardDeletePopupOpen(true)
        setCardToDelete(card)
    }, [])
    const closeAllPopups = useCallback(() => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setIsCardDeletePopupOpen(false)
        setSelectedCard(null)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userData, cardsData] = await Promise.all([
                    api.getUserInfo(),
                    api.getInitialsCards(),
                ])
                setCurrentUser(userData)
                setCards(cardsData)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])

    const handleCardLike = useCallback(
        (card) => {
            // Снова проверяем, есть ли уже лайк на этой карточке
            const isLiked = card.likes.some((i) => i._id === currentUser._id)

            // Отправляем запрос в API и получаем обновлённые данные карточки
            api.changeLikeCardStatus(card._id, isLiked)
                .then((newCard) => {
                    setCards((state) =>
                        state.map((c) => (c._id === card._id ? newCard : c))
                    )
                })
                .catch((err) => {
                    console.error(err)
                })
        },
        [currentUser]
    )

    const handleCardDelete = useCallback(() => {
        api.deleteCard(cardToDelete._id)
            .then(() => {
                setCards((cards) =>
                    cards.filter((item) => item._id !== cardToDelete._id)
                )
                closeAllPopups()
            })
            .catch((err) => console.error(err))
    }, [cardToDelete])

    const handleUpdateUser = useCallback(
        (info) => {
            api.setUserInfo(info)
                .then((userData) => {
                    setCurrentUser(userData)
                    closeAllPopups()
                })
                .catch((err) => console.error(err))
        },
        [closeAllPopups]
    )
    const handleUpdateAvatar = useCallback(
        (link) => {
            api.setAvatar(link)
                .then((userData) => {
                    setCurrentUser(userData)
                    closeAllPopups()
                })
                .catch((err) => console.error(err))
        },
        [closeAllPopups]
    )
    const handleAddPlace = useCallback(
        (card) => {
            api.addCard(card)
                .then((newCard) => {
                    setCards([newCard, ...cards])
                    closeAllPopups()
                })
                .catch((err) => console.error(err))
        },
        [cards, closeAllPopups]
    )
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={
                            isLoggedIn ? (
                                <Navigate to="/" replace />
                            ) : (
                                <Navigate to="/sign-in" replace />
                            )
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <ProtectedRoute
                                element={
                                    <Main
                                        onEditProfile={handleEditProfileClick}
                                        onAddPlace={handleAddPlaceClick}
                                        onEditAvatar={handleEditAvatarClick}
                                        cards={cards}
                                        onCardClick={handleCardClick}
                                        onCardLike={handleCardLike}
                                        onDeleteClick={handleDeleteClick}
                                    />
                                }
                                isLoggedIn={isLoggedIn}
                            />
                        }
                    />
                    <Route path="/sign-in" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                </Routes>
                <Footer />

                <PopupAvatar
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <PopupProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <PopupAdd
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPopup={handleAddPlace}
                />
                <PopupDelete
                    isOpen={isCardDeletePopupOpen}
                    onClose={closeAllPopups}
                    onCardDelete={handleCardDelete}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App
