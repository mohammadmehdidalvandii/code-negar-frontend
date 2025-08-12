import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import React from 'react'
import HomePage from './page/HomePage/HomePage'

const App:React.FC = ()=>{
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
  )
}

export default App