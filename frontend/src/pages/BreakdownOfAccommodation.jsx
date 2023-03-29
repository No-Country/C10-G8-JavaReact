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
        <main className='container w-full h-full bg-[#03052e] flex-col gap-10 p-5 text-white'>
            <header className='w-full h-10 flex space-x-40 items-center mb-10'>
                <div className='flex justify-center items-center w-20 h-full rounded-full bg-white '>
                    <img className='  w-15 h-10' src={logo} alt="Soy un Logo" />
                </div>

                <nav className='relative ' >
                    <input type="text" className='rounded-full  ' placeholder='   Buscar' />
                    <i className="fa-solid fa-magnifying-glass absolute right-2 bottom-0 top-1 text-black "></i>

                </nav>

                <div className=' flex justify-center items-center w-20 h-full rounded-full bg-gray-500'>
                    <i className="fa-solid fa-user "></i>
                </div>
            </header>

            <section className='flex w-full mb-10'>
                <section className='flex-col p-10 pt-20 bg-red-400 w-3/4'>
                    <h1 clasName='text-20 h-50'>Nombre de Vivienda</h1>

                    <div className='flex items-center gap-2'>
                        <i class=" fa-regular fa-star"></i>
                        <h3 >
                            4,7. Evaluaciones</h3>
                        <hr className='bg-black h-5 text-[black]' />
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className="pl-1 fa-solid fa-location-dot"></i>
                        <h3>Ubicación</h3>

                    </div>


                </section>

                <section className='w-full bg-blue-200 grid grid-rows-3 grid-flow-col gap-5'>
                    <img className='w-10 h-20' src="https://picsum.photos/200/300" alt="" />
                    <img className='w-10' src="https://picsum.photos/200/300" alt="" />
                    <img className='w-10' src="https://picsum.photos/200/300" alt="" />
                    <img className='w-10' src="https://picsum.photos/200/300" alt="" />
                    <img className='w-10' src="https://picsum.photos/200/300" alt="" />
                    <img className='w-10' src="https://picsum.photos/200/300" alt="" />



                    <div className='bg-gray-500 h-10 w-10 flex justify-center items-center rounded-full'><i className="fa-solid fa-arrow-right"></i></div>
                </section>
            </section>
            <section className='flex gap-5 w-full'>
                <section className='flex flex-col w-1/2 gap-5'>
                    <div className='rounded-lg bg-[#0cfca7] text-black p-3'>
                        <h2>Casa en X destino - Anfitrión: Marcelo</h2>
                        <h4>x huespedes - x camas - x habitaciones</h4>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2>Description Alojamiento</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus praesentium rerum quae sed modi eum dolorem! Rem, iste ex? Voluptates magni modi libero. Ipsum impedit explicabo suscipit fuga aspernatur!asdas...</p>
                        <button className='w-20 p-2 bg-[blue] text-[white] rounded-full'>Leer más</button>
                        <hr />
                    </div>
                </section>
                <section className='flex flex-col bg-white h-full  right-0 h-52  text-[black] rounded-xl w-1/2'>
                    <div className='flex p-2 w-50 h-full'>
                        <h2 className='font-bold'>$$$ Noche</h2>

                    </div>
                    <section className='flex borde-solid border-2 border-gray m-5 space-x-{2} '>
                        <div>Check In</div>
                        <div>Check Out</div>

                    </section>
                    <section>
                        <div>
                            <h2>Huéspedes</h2>
                            <div>
                                <h3>x huespedes</h3>
                                <i class="fa-solid fa-circle-chevron-down"></i>
                            </div>
                        </div>
                    </section>
                    <button className='rounded-lg bg-blue-500 w-1/2'>Reservar</button>
                </section>

            </section>
         
            <section className='flex w-1/2 gap-3 flex-col '>
                <h3>Acomodaciones</h3>
                <i class="fa-solid fa-wifi"><span className='pl-5'>
                    Wifi
                </span></i>
                <i class="fa-solid fa-kitchen-set"><span className='pl-5'>Cocina</span></i>

                <hr />
            </section>
          
            <section className='flex w-1/2 gap-4 flex-col'>
                <h3>Servicios</h3>
                
                <i class="fa-solid fa-person-swimming"></i>
                
                <i class="fa-solid fa-dumbbell"></i>
                <i class="fa-solid fa-campground"></i>
               
                <button className='m-2 rounded-2xl w-3/4 p-2 bg-blue-200 text-black'>Mostrar más servicios</button>

            </section>
            <div className='flex h-20 p-2 w-full bg-green-600'>
                <ul className='flex m-auto gap-10'>
                    <li>Fotos</li>
                    <li>Servicios</li>
                    <li>Evaluaciones</li>
                    <li>Cambiar Fechas</li>
                    <li></li>
                </ul>
                <ul className='flex flex-col'>
                    <li>$$$</li>
                    <li>x días</li>
                    <li>x huespedes</li>
                </ul>
                <button className='p-2 h-10 m-auto rounded-xl bg-blue-500'>Reservar</button>
            </div>

        </main >
    );
};

export default BreakdownOfAccommodation;