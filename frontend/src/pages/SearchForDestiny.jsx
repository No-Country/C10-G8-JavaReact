import React from 'react';
import Footer from '../components/Footer';
import NavbarStyle2 from '../components/NavbarStyle2';
import arrayImage from '../assets/ArrayExample'
import {Link} from 'react-router-dom'
import TravelPage from './TravelPage';

const SearchForDestiny = () => {

    return (
        <main>
            <article>
                <NavbarStyle2 />
                <section className='p-10'>
                    <h2 className='text-[#4B4B4B] font-normal text-4xl'>Alojamientos en X</h2>
                    <section className='p-10 flex justify-center'>
                        {
                            arrayImage.map((item) => (
                                <div className='relative w-64 h-64' key={item}>
                                    <img className='w-56 h-56  bg-gray-100 h' src={item} alt="" />
                                    <button className=' absolute bg-[#B4B4B4] px-5 py-2 rounded-lg bottom-0.5 right-24 text-center text-base'>Ver más</button>
                                    <i className="fa-regular fa-heart absolute text-xl top-1 right-12"></i>
                                </div>

                            ))
                        }

                    </section>

                    <div className='flex justify-center text-xl items-center gap-10 font-mono font-extrabold'>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>1</h3>
                        </div>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>2</h3>
                        </div>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>3</h3>
                        </div>
                        <i className="fa-solid text-3xl fa-arrow-right"></i>
                    </div>

                </section>

            </article>
            <Footer />
            
        </main>
    );
};

export default SearchForDestiny;