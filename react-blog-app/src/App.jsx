import React, { useEffect, useState } from "react"
import Signup from "./components/Signup"
import { Navbar, PostCard } from "./components/index.js"
import { useDispatch } from "react-redux"
import authService from "./appwrite/auth.js"
import { login, logout } from "./store/authSlice.js"
import { Outlet } from "react-router-dom"
import RTE from "./components/RTE.jsx"
import Login from "./components/Login.jsx"




function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   authService.getCurrentUser()
  //     .then((userData) => {
  //       if (userData) {
  //         dispatch(login({ userData }))
  //       }
  //       else {
  //         dispatch(logout())
  //       }
  //     })
  //     .finally(() => setLoading(false))
  // }, [])

  return loading ? (
    <div className="h-screen w-full">
      <Navbar />
      {/* <main>
      <Outlet/>
    </main> */}
    <Signup/>
    </div>

  ) : (<div>Loading</div>)
}

export default App
