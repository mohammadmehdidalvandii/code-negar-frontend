import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import React from 'react'
import HomePage from '@page/HomePage/HomePage'
import Login from '@page/Login/Login'
import Register from '@page/Register/Register'

const App:React.FC = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App