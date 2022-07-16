import React from 'react'
import { useEffect } from 'react'
import { useStore } from './useStore'
import { supabase } from './client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'
// import { ToastContainer } from 'react-toastify'
import { Toaster } from 'react-hot-toast'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const setLoggedIn = useStore((state) => state.setLoggedIn)

  useEffect(() => {
    const session = supabase.auth.session()
    if (session) {
      setLoggedIn(true)
    }
    console.log('session: ', session)
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
