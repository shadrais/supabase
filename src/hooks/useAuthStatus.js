import { useEffect, useState, useRef } from 'react'
import { supabase } from '../client'
import { useStore } from '../useStore'

const useAuthStatus = () => {
  const [checkingStatus, setCheckingStatus] = useState(true)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const session = supabase.auth.session()
    if (session) {
      console.log('Session found, logged in', session)
      setLoggedIn(true)
    }
    setCheckingStatus(false)
  }, [])
  return { loggedIn, checkingStatus }
}

export default useAuthStatus
