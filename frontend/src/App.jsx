import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Register from './login/Register'
 import Login from './login/Login'
import Profile from './login/Profile'

function App() {
 
  return (
    <HashRouter>
     
       <Register></Register>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />
        
      </Routes>
 


    </HashRouter>
    

  )
}

export default App
