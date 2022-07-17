import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useStore } from './useStore'
import { supabase } from './client'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
// import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/Profile'

function App() {
  const setLoggedIn = useStore((state) => state.setLoggedIn)
  const setUser = useStore((state) => state.setUser)
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setLoggedIn(true)
      }
    })
  })
  useEffect(() => {
    const session = supabase.auth.session()
    if (session) {
      setUser(session.user)
      setLoggedIn(true)
    }
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/' element={<PrivateRoute />} >

          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
