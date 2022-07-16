import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../client'
import { useStore } from '../useStore'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'

const SignUp = () => {
  const navigate = useNavigate()

  const [details, setDetails] = useState({
    email: '',
    password: '',
    name: '',
  })
  const loggedIn = useStore((state) => state.loggedIn)
  const setModalOpen = useStore((state) => state.setModalOpen)
  const modalOpen = useStore((state) => state.modalOpen)
  useEffect(() => {
    if (loggedIn) {
      navigate('/')
    }
  })

  const { email, password, name } = details

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    const toastId = toast.loading('SigningUp...')
    console.log('details: ', details)
    const { user, session, error } = await supabase.auth.signUp(
      {
        email: email,
        password: password,
      },
      {
        data: {
          name: name,
        },
      }
    )
    console.log('user: ', user)
    console.log('session: ', session)
    console.log('error: ', error)
    if (user) {
      toast.success('Confirmation Email Sent!', {
        id: toastId,
      })
      setModalOpen(true)
    }
    if (error) {
      toast.error(error.message, {
        id: toastId,
      })
      console.log('error: ', error)
    }
  }

  return (
    <motion.div
      className='grid place-items-center h-screen fixed top-0 w-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      {modalOpen && <Modal email={email} />}
      <form
        onSubmit={submitHandler}
        className='card w-11/12 bg-neutral shadow-xl md:w-96 sm:mx-4'>
        <div className='card-body grid place-items-center'>
          <h2 className='card-title text-3xl mb-4 '>Sign Up</h2>
          <div className='form-control flex gap-6'>
            <label className='input-group'>
              <span>Name</span>
              <input
                value={name}
                name='name'
                onChange={handleChange}
                type='text'
                placeholder='John Doe'
                className='input input-bordered w-full'
              />
            </label>
            <label className='input-group'>
              <span>Email</span>
              <input
                value={email}
                name='email'
                onChange={handleChange}
                type='email'
                placeholder='info@site.com'
                className='input input-bordered w-full'
              />
            </label>
            <label className='input-group'>
              <span>Password</span>
              <input
                value={password}
                name='password'
                onChange={handleChange}
                type='password'
                placeholder='••••••••'
                min='8'
                className='input input-bordered w-full'
              />
            </label>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              type='submit'
              className='btn btn-primary w-full'>
              Login
            </motion.button>
            <div className='grid place-items-center'>
              <motion.div
                onClick={() => navigate('/login')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type='submit'
                className='link link-primary'>
                Already have an account? Login
              </motion.div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default SignUp
