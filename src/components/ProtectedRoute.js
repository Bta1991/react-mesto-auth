import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({
    isLoggedIn,
    element: Component,
    ...props
}) => {
    return isLoggedIn ? (
        <Component {...props} />
    ) : (
        <Navigate to="/sign-in" replace />
    )
}
