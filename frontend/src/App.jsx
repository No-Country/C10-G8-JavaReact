import { useState } from 'react'
import reactLogo from './assets/react.svg'
import styled from 'styled-components';
import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
 

function App() {
const [showModal,setShowModal] = useState(false)
  return (
    <HashRouter>
 
        
       
      <Login visible={showModal}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />
        
      </Routes>
 


    </HashRouter>
    

  )
}

export default App
