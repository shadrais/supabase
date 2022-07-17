import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { supabase } from '../client'
import ButtonLoader from '../assets/ButtonLoader.gif'
import { useStore } from '../useStore'

function Login() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [details, setDetails] = useState({
    email: '',
    password: '',
  })
  const setLoggedIn = useStore((state) => state.setLoggedIn)
  const loggedIn = useStore((state) => state.loggedIn)
  const setUser = useStore((state) => state.setUser)

  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  }, [])

  const { email, password } = details

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    const toastId = toast.loading('SigningIn...')
    setLoading(true)
    console.log('details: ', details)
    const { user, session, error } = await supabase.auth.signIn({
      email,
      password,
    })
    console.log('user: ', user)
    console.log('session: ', session)
    console.log('error: ', error)

    // do something else
    if (user) {
      const user = supabase.auth.user()
      setUser(user)
      toast.success('Signed In!', {
        id: toastId,
      })
      setLoggedIn(true)
      navigate('/')
      setLoading(false)
    }
    if (error) {
      toast.error(error.message, {
        id: toastId,
      })
      setLoading(false)
      console.log('error: ', error)
    }
  }

  return (
    <motion.div
      className="grid place-items-center h-screen fixed top-0 w-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <form
        onSubmit={submitHandler}
        className="card w-11/12 bg-neutral shadow-xl md:w-96 sm:mx-4"
      >
        <div className="card-body grid place-items-center">
          <h2 className="card-title text-3xl mb-4 ">Login</h2>
          <div className="form-control flex gap-6">
            <label className="input-group">
              <span>Email</span>
              <input
                required
                value={email}
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="info@site.com"
                className="input input-bordered w-full"
              />
            </label>
            <label className="input-group">
              <span>Password</span>
              <input
                required
                value={password}
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="••••••••"
                min="8"
                className="input input-bordered w-full"
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className="btn btn-primary w-full"
            >
              {loading ? (<img src={ButtonLoader} alt="ButtonLoader" height={10} />) : 'Login'}
            </motion.button>
            <div className="grid place-items-center">
              <motion.div
                onClick={() => navigate('/signup')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                className="link link-primary"
              >
                Don't have an account? SignUp
              </motion.div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Login
