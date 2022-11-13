import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector((store) => (store.AuthReducer));
    if (!isAuth) {
        return <Navigate to='/' state={{path:'login'}} replace/>
    }
    return children
}

export default PrivateRoute