import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Populares from '../components/Populares';
import Footer from '../components/Footer';
import Anfitrion from '../components/Anfitrion';
import ExploraHospedajes from '../components/ExploraHospedajes';

const Home = () => {
    return (
        <div className='w-screen h-screen bg-[#E9E8E8] overflow-x-hidden'>
            <NavBar />
            <div className='flex flex-col mt-24 min-[540px]:px-20  py-4' >
                <Hero />
                <Populares />
                <div className='bg-[#7a7171] h-[80vh]' >
                    Vacaciona en X ubicacion
                </div>
                <ExploraHospedajes />
            </div>
            <Anfitrion />
            <Footer />
        </div>
    )
}

export default Home

