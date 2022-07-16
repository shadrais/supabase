import React from 'react'
import { motion } from 'framer-motion'
const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <motion.div
      className='grid place-items-center h-screen fixed top-0 w-screen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
      <form
        onSubmit={submitHandler}
        className='card w-11/12 bg-neutral shadow-xl md:w-96 sm:mx-4'>
        <div className='card-body grid place-items-center'>
          <h2 className='card-title text-3xl mb-4 '>Login</h2>
          <div className='form-control flex gap-6'>
            <label className='input-group'>
              <span>Name</span>
              <input
                type='text'
                placeholder='John Doe'
                className='input input-bordered w-full'
              />
            </label>
            <label className='input-group'>
              <span>Email</span>
              <input
                type='email'
                placeholder='info@site.com'
                className='input input-bordered w-full'
              />
            </label>
            <label className='input-group'>
              <span>Password</span>
              <input
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
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Login
