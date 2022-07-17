import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { useAuthStatus } from '../hooks/useAuthStatus';
import { useStore } from '../useStore'
// import Spinner from './Spinner'

function PrivateRoute() {
  // const { loggedIn, checkingStatus } = useAuthStatus()

  // if (checkingStatus) {
  //   return <div>Loading...</div>
  // }

  // return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
