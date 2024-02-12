import React from 'react'
import { useDispatch } from "react-redux"
import { logout as authLogout } from '../store/authSlice'
import authService from '../appwrite/auth'

function LogoutBtn() {
    const dispatch = useDispatch()

    function logoutHandler() {
        authService.logout().then(() => {
            dispatch(authLogout())
        })
    }

    return (
        <button onClick={logoutHandler} type="submit" className='hover:bg-blue-200 bg-blue-400 px-3 py-1 rounded-full font-medium transition-all'>Logout</button>

    )
}

export default LogoutBtn