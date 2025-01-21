

import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function AuthIndex() {
  return (
    <div>
      <Outlet/>
    </div>
  )
}


/** @type RouteObject */
export const authChildren = [
  {
      path: "",
      element: <Login />,
  },
  {
    path: "login",
    element: <Login />,
},
  {
      path: "register",
      element: <Register />,
  },
]
