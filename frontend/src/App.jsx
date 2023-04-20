
import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchForDestiny from './pages/SearchForDestiny'
import Favorites from './pages/Favorites'
import TravelPage from './pages/TravelPage'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'       
import EditForm from './pages/EditForm'
import LoadingPage from './components/LoadingPage'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'


function App() {

  return (

    <HashRouter>
      
 
      <Routes>
     

      <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />
        <Route path="/SearchForDestiny" element={<SearchForDestiny/>} />
        <Route path='/TravelPage' element={<TravelPage/>}/>
        <Route path='/Checkout/:id' element={<Checkout/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/EditForm' element={<EditForm/>}/>
      </Routes>
      
    </HashRouter>
  )
}

export default App


