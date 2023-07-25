import React, { useState } from 'react'
import AuthContext from './AuthContext'

const AuthState = (props) => {
    const [token,setToken]=useState('lalit')

  return (
    <AuthContext.Provider value={{token,setToken}}>
        {props.childern}
    </AuthContext.Provider>
  )
}

export default AuthState
