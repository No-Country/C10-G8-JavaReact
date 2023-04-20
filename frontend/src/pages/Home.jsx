import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Populares from '../components/Populares';
import Footer from '../components/Footer';
import Anfitrion from '../components/Anfitrion';
import ExploraHospedajes from '../components/ExploraHospedajes';
import LugarDestacado from '../components/LugarDestacado';
import LoadingPage from '../components/LoadingPage';

const Home = () => {
    return (
        
        <div className='w-screen h-screen bg-white overflow-x-hidden'>
            
            <NavBar />
            <Hero />
            <div className='flex flex-col min-[540px]:px-20  py-4' >
                <Populares />
            </div>
            <LugarDestacado />
            <div className='flex flex-col min-[540px]:px-20  py-4' >
                <ExploraHospedajes />
            </div>
            <Anfitrion />
            <Footer />
            <LoadingPage/>
        </div>
    )
}

export default Home

