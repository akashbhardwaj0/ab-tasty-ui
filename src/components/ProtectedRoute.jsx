import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({element}) => {
    const {cart} = useSelector((state)=>state.cartData)
  return (
cart.length>0?element:<Navigate to = "/" />
  )
}
