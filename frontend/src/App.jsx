import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SearchForDestiny from './pages/SearchForDestiny'
import Favorites from './pages/Favorites'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation />} />
        <Route path="/SearchForDestiny" element={<SearchForDestiny />} />
      </Routes>
    </HashRouter>
  )
}

export default App