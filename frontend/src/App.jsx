import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchForDestiny from './pages/SearchForDestiny'
import TravelPage from './pages/TravelPage'
import Checkout from './pages/Checkout'

function App() {

  return (
    <HashRouter>
      <Routes>

      
      <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />
        <Route path="/SearchForDestiny" element={<SearchForDestiny/>} />
        <Route path='/TravelPage' element={<TravelPage/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>



      </Routes>
    </HashRouter>
  )
}

export default App