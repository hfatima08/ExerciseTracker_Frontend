import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';

export default function ProtectedRoute() {
  const isLogin = localStorage.getItem("isLoggedIn")
    if (!isLogin) {
      toast.error("You may login first!")
      return <Navigate to='/' />
    } 
  
    return <Outlet />
}
