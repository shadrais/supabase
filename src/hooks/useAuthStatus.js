import { useEffect, useState, useRef } from 'react'
import { supabase } from '../client'
import { useStore } from '../useStore'

const useAuthStatus = () => {
  const isMounted = useRef(true)
  const [checkingStatus, setCheckingStatus] = useState(true)

  const setLoggedIn = useStore((state) => state.setLoggedIn)

  useEffect(() => {
    if (isMounted) {
      supabase.auth.onAuthStateChange((event, session) => {
        if (session) {
          setLoggedIn(true)
        }
      })
      setCheckingStatus(false)
    }

    return () => {
      isMounted.current = false
    }
  }, [isMounted])

  return { loggedIn, checkingStatus }
}

export default useAuthStatus
