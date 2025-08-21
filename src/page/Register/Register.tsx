import NavbarHome from '@components/template/homePage/NavbarHome/NavbarHome'
import Signup from '@components/template/LoginRegister/Signup/Signup'
import React from 'react'

const Register:React.FC = ()=>{
  return (
    <>
        <NavbarHome/>
        <Signup/>
    </>
  )
}

export default Register