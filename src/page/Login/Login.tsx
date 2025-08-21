import React from 'react'
import Signin from '@components/template/LoginRegister/Signin/Signin'
import NavbarHome from '@components/template/homePage/NavbarHome/NavbarHome'

const Login:React.FC = ()=>{
  return (
    <>
    <NavbarHome/>
    <Signin/>
    </>
  )
}

export default Login