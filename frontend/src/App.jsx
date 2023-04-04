import BreakdownOfAccommodation from './pages/BreakdownOfAccommodation'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home' 
import Profile from './pages/Profile'
import EditForm from './pages/EditForm' 


function App() {
   /*
   x.
   */
  return (
    <HashRouter>   
          
      <Routes>
      
      <Route path='/' element={<Home/>} />
        <Route path="/BreakdownOfAccommodation" element={<BreakdownOfAccommodation/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/edit' element={<EditForm/>} />

      </Routes>
 


    </HashRouter>
    

  )
}

export default App
