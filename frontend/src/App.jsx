import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <HashRouter>
      
        
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />

      </Routes>




    </HashRouter>

  )
}

export default App
