import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStore } from '../useStore'
import { supabase } from '../client'

const Navbar = () => {
  const loggedIn = useStore((state) => state.loggedIn)
  const setLoggedIn = useStore((state) => state.setLoggedIn)

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    setLoggedIn(false)
  }

  return (
    <motion.div
      className='fixed top-0 w-screen grid place-items-center z-10 '
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}>
      <div className='navbar bg-primary text-primary-content h-20 w-screen '>
        <div className='flex-1'>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            Supabase
          </Link>
        </div>
        <div className='flex-none mr-4'>
          {!loggedIn ? (
            <Link
              to='/login'
              className='btn btn-secondary normal-case text-lg w-24 '>
              Login
            </Link>
          ) : (
            <button
              onClick={handleLogout}
              className='btn btn-secondary normal-case text-lg w-auto '>
              Sign Out
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
