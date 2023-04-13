import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchForDestiny from './pages/SearchForDestiny'
import Favorites from './pages/Favorites'
import TravelPage from './pages/TravelPage'
import Checkout from './pages/Checkout'
import Profile from './pages/Profile'       

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
    
 
 
      </Routes>
    </HashRouter>
  )
}

export default App