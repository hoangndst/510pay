import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export const ProtectedComponent = ({ children }) => {
  
  let { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <Navigate to="/510pay/signIn" />
    )
  };
  
  return children;
}
