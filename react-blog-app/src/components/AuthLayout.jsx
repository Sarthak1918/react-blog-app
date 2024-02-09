import React,{useEffect,useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function AuthLayout({children,authentication = true}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout