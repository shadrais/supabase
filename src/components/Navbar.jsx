import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <motion.div
      className='fixed top-0 w-screen grid place-items-center z-10'
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 3 }}
      transition={{ duration: 1 }}>
      <div className='navbar bg-primary text-primary-content h-20 w-11/12 mx-2 my-2 rounded-lg '>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            Supabase
          </Link>
        </div>
        <div className='flex-none mr-4'>
          <Link
            to='/login'
            className='btn btn-secondary normal-case text-lg w-24 '>
            Login
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
