import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../assets/goandstay- only.png'

const BreakdownOfAccommodation = () => {
    const [house, setHouse] = useState({})

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/4/')
            .then(res => setHouse(res.data))

    }, [])





    return (
        <main className='container w-screen  h-screen overflow-x-hidden text-white p-10 flex-col space-y-20 bg-[#03052e]'>
            <header className='flex items-center w-full lg:w-full sm:w-l h-10 lg:w-screen justify-center gap-5 flex'>
                <div className='w-35 bg-white flex items-center h-full rounded-full '>
                    <img className='  w-20 h-10' src={logo} alt="Soy un Logo" />
                </div>

                <nav className='relative w-3/4' >
                    <input type="text" className='rounded-full  ' placeholder='   Buscar' />
                    <i className="fa-solid fa-magnifying-glass absolute right-2 bottom-0 top-1 text-black "></i>

                </nav>

                <div className=' flex justify-center items-center w-20 h-full rounded-full bg-gray-500'>
                    <i className="fa-solid fa-user "></i>
                </div>
            </header>
            
            <section>
                <section className='xs:flex-col text-center'>
                    <h1 clasName='text-9xl'>{house.name}</h1>
                    <h3><span><i class="fa-regular fa-star"></i></span>4,7. Evaluaciones</h3>
                    <h3><i className="fa-solid fa-location-dot"></i><span></span>Ubicación</h3>
                </section>

                <section className='w-full'>
                    <img src={house.sprites?.font_default} alt="" />


                    <div><i className="fa-solid fa-arrow-right"></i></div>
                </section>
            </section>
            <section>
                <section>
                    <div></div>
                    <div>
                        <h2>Description Alojamiento</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus praesentium rerum quae sed modi eum dolorem! Rem, iste ex? Voluptates magni modi libero. Ipsum impedit explicabo suscipit fuga aspernatur!asdas...</p>
                        <button className='w-25 p-2 bg-[blue] text-[white] rounded-full'>Leer más</button>
                    </div>
                </section>
                <section>
                    <section>

                    </section>
                </section>

            </section>
            <hr />
            <section>
                <h3>Acomodaciones</h3>

            </section>
            <hr />
            <section>
                <h3>Servicios</h3>
                <input type="checkbox" name="" id="" />
                <button>Mostrar más servicios</button>

            </section>
            <div>
                <ul>
                    <li>Fotos</li>
                    <li>Servicios</li>
                    <li>Evaluaciones</li>
                    <li>Cambiar Feachas</li>
                    <li></li>
                </ul>
            </div>

        </main>
    );
};

export default BreakdownOfAccommodation;