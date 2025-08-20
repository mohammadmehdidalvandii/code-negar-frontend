import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import React from 'react'
import HomePage from '@page/HomePage/HomePage'
import Login from '@page/Login/Login'

const App:React.FC = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App