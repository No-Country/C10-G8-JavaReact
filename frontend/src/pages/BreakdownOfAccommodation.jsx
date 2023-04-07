import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../assets/goandstay- only.png'
import DesgloseAlojamiento from '../components/DesgloseAlojamiento';
import Footer from '../components/Footer';
import NavbarStyle2 from '../components/NavbarStyle2';
import ArrayExample from '../assets/ArrayExample';
import MorePhotos from '../components/MorePhotos';
import FullDescription from '../components/FullDescription';
import Checkout from './Checkout';
import { Link } from 'react-router-dom';
import MoreServices from '../components/MoreServices';

const BreakdownOfAccommodation = () => {
    const [visiblePhotos, setVisiblePhotos] = useState(false)
    const [visibleDescription, setVisibleDescription] = useState(false)
    const [visibleServices, setVisibleServices] = useState(false)
    const closePhotos = () => {
        setVisiblePhotos(false)
    }

    const closeDescription = () => {
        setVisibleDescription(false)
    }

    const closeServices = () => {
        setVisibleServices(false)
    }



    return (
        <main className='Container   bg-[#ffff] flex-col gap-10 font-poppins '>
            <NavbarStyle2 />
            <article className='w-full h-full  flex-col '>

                <section className='flex w-full p-10 px-14  mb-10 w-1/2'>
                    <section className=' flex flex-col justify-center gap-2 pl-10 m-auto  w-1/2'>
                        <h1 className='text-6xl text-[#202F59] h-50 pb-3 '>Nombre de la <br /> Vivienda</h1>

                        <div className='flex flex-col  md:text-xl'>
                            <div className='flex items-center justify-start gap-2 md:text-xl'>
                                <i className="text-[#EAD201] fa-regular fa-star"></i>
                                <h3 className='text-[#202F59] font-bold border-b-2 border-[#202F59]' >
                                    4,7. Evaluaciones</h3>

                            </div>


                        </div>
                        <div className='flex items-center gap-2 md:text-xl'>
                            <i className="text-[#5333ED] pl-1 fa-solid fa-location-dot"></i>
                            <h3 className='text-[#202F59] px-1'>Ubicación</h3>

                        </div>

                        <div className='text-[#5333ED] py-8 font-semibold flex flex-col justify-center'>
                            <h2>!Ya te hospedaste aquí! Deja una reseña.</h2>
                            <hr className='h-1 w-80 bg-opacity-30  bg-[#5333ED]' />

                        </div>




                    </section>

                    <section className='w-1/2  grid gap-5 p-2 grid-rows-3 grid-cols-3 content-center items-center h-3/5'>
                        {
                            ArrayExample.map(img => (
                                <img className='w-52 h-44' src={img} alt="" />
                            ))
                        }
                        <div
                            className='h-24 w-32 flex  items-center justify-center'><i onClick={() => setVisiblePhotos(true)} className="fa-solid text-[#5333ED] text-7xl fa-arrow-right"></i>
                        </div>





                    </section>
                </section>
                <section className='p-10 px-14  flex gap-5 w-full '>
                    <section className='flex flex-col w-1/2   gap-5'>
                        <div className='rounded-2xl py-8 gap-5 flex flex-col  bg-[#202F59] text-[#ffff] p-3'>
                            <h2 className='text-3xl text-center '>Casa en X destino - Anfitrión: Marcelo</h2>
                            <h4 className='px-12 text-lg font-medium'>x huéspedes - x camas - x habitaciones</h4>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-[#202F59] text-2xl font-semibold'>Descripción del alojamiento</h2>
                            <p className='text-[#202F59]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus praesentium rerum quae sed modi eum dolorem! Rem, iste ex? Voluptates magni modi libero. Ipsum impedit explicabo suscipit fuga aspernatur!asdas...</p>
                            <button onClick={() => setVisibleDescription(true)} className='w-2/5 font-bold p-2 bg-[#5333ED] text-[white] rounded-lg'>Leer más</button>

                        </div>
                    </section>
                    <section className='flex flex-col bg-white h-full p-7 border-2 border-solid border-[#5333ED] border-opacity-30 h-52  text-[black] rounded-3xl w-1/2'>
                        <div className='flex p-2 w-50 h-full'>
                            <h2 className=' text-4xl'><span className='font-bold'>$$$$ </span> noche</h2>

                        </div>
                        <section className='flex justify-between items-center borde-solid border-2 border-[#5333ED] m-4  rounded-3xl '>
                            <div className='flex flex-col w-full'>
                                <div className='flex justify-between px-7 mt-2 '>
                                    <h3 className='text-[#202F59] text-2xl font-semibold'>Check In</h3>
                                    <i className='text-4xl text-[#5333ED] bx bx-calendar-alt'></i>
                                    <h3 className='text-[#202F59] text-2xl font-semibold'>Check Out</h3>
                                </div>
                                <div className='flex justify-between px-7 '>
                                    <h3 className='italic text-xl mb-2 text-[#5333ED] text-opacity-30'>d/mm/aaaa</h3>
                                    <h3 className='italic text-xl mb-2 text-[#5333ED] text-opacity-30 '>d/mm/aaaa</h3>

                                </div>
                                <hr className='w-full h-0.5 bg-[#5333ED]' />
                                <div className='px-7 mt-2 '>
                                    <h2 className='text-[#202F59] text-2xl font-semibold'>Huéspedes</h2>

                                </div>
                                <div className='flex px-7 mt-2 mb-5 justify-between items-center'>
                                    <h3 className='italic text-xl mb-2 text-[#5333ED] text-opacity-30'>x huespedes</h3>
                                    <i className='text-[#5333ED] text-6xl bx bx-down-arrow-alt'></i>
                                </div>


                            </div>





                        </section>
                        <div className='flex justify-center'>
                            <Link to='/Checkout'>
                                <button className='rounded-lg  bg-[#5333ED] text-lg text-[#ffff] font-bold h-10 w-full mx-5'>Reservar</button>
                            </Link>

                        </div>


                    </section>



                </section>

                <section className='p-10 px-14  flex flex-col py-5 w-1/2 gap-3 text-[#202F59]'>
                    <div className='flex items-center gap-5 pb-10'>
                        <h3 className='text-2xl font-semibold'>Acomodaciones</h3>
                        <hr className='h-0.5 w-4/5 bg-opacity-30 bg-[#5333ED]' />
                    </div>


                    <i className=" flex  fa-solid fa-wifi"><h3 className='pl-5'>
                        Wifi
                    </h3></i>
                    <i className=" flex  fa-solid fa-kitchen-set"><h3 className='pl-5'>Cocina</h3></i>
                    <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 4</h3></i>



                </section>

                <section className='p-10 px-14  flex flex-col py-5 w-1/2 gap-3 text-[#202F59]'>
                    <div className='flex items-center gap-5 pb-10'>
                        <h3 className='text-2xl font-semibold'>Servicios</h3>
                        <hr className='h-0.5 w-4/5 bg-opacity-30 bg-[#5333ED]' />
                    </div>
                    <div className='grid grid-cols-2 grid-rows-3 gap-5'>
                        <i className="flex fa-solid fa-paw"><h3 className='pl-5'>Se permiten Mascotas</h3></i>
                        <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 3</h3></i>
                        <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 4</h3></i>
                        <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 3</h3></i>
                        <i className=" flex  fa-regular fa-circle"><h3 className='pl-5'>Acomodacion 4</h3></i>

                    </div>

                    <button onClick={() => setVisibleServices(true)} className=' my-14 rounded-lg w-2/4 py-2 bg-[#5333ED] text-[#ffff] font-semibold'>Mostrar más servicios</button>

                </section>
                <div className='flex h-20 py-2 items-centers  justify-around text-[#D9D9D9] shadow-xl  w-full '>
                    <ul className='flex  gap-20'>
                        <li className='flex flex-col items-center'>Fotos <i className="fa-solid fa-circle"></i></li>
                        <li className='flex flex-col items-center'>Servicios <i className="fa-solid fa-circle"></i></li>
                        <li className='flex flex-col items-center'>Evaluaciones <i className="fa-solid fa-circle"></i></li>
                        <li className='flex flex-col items-center'>Cambiar Fecha<i className="fa-solid fa-circle"></i></li>


                    </ul>
                    <ul className='flex flex-col text-base'>
                        <li>$$$</li>
                        <li>x días</li>
                        <li>x huespedes</li>
                    </ul>
                    <Link to='/Checkout'><button className='rounded-lg w-44 h-10 bg-[#5333ED] text-semibold text-[#ffff]'>Reservar</button></Link>

                </div>
                <section className='p-10  '   >
                    <section className=' flex gap-5 h-20'>
                        <div className=' flex justify-center items-center w-20 h-full rounded-full bg-[#202F59]'>
                            <img src="pexels-sandro-tavares-15728332" alt="" />
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='text-[#202F59] text-3xl font-semibold'>Anfitrión: Marcelo Apellido</h2>
                            <h3 className='text-opacity-30 italic font-normal text-xl text-[#5333ED4D]'>Anfitrión desde aaaa</h3>
                        </div>


                    </section>
                    <section className='flex  w-full '>
                        <section className='w-1/2 ' >
                            <div className='flex flex-col pt-5 p-5 '>
                                <div className='flex items-center gap-5'>
                                    <i className="text-4xl fa-solid fa-language"></i>
                                    <h2>Idiomas: texto, texto</h2>

                                </div>
                                <div className='flex items-center gap-5'>
                                    <i className=" fa-regular fa-star"></i>
                                    <h3>x Evaluaciones</h3>
                                </div>
                                <div>
                                    <h2>Conoce al anfitrión:</h2>
                                    <p className='p-2'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel mollitia aliquid ex dolorem cupiditate, assumenda ipsam amet expedita nam culpa reiciendis iste nesciunt perferendis repellendus autem deleniti illo in?
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor voluptatem qui natus at nobis rerum atque tempore doloribus, id ea modi cupiditate praesentium ad iste! Nostrum fugiat dolor corporis iste?
                                    </p>
                                    <button className='bg-white rounded-full text-black p-2'>Ponte en contacto con el anfitrión</button>


                                </div>

                            </div>
                        </section>
                        <section className='w-1/2'>
                            <div className='bg-gray-500 h-full'>
                                <h2>Mapa de la ubicación</h2>
                                <div className='bg-white w-1/2 m-auto'>
                                    <h2>X Ubicacion</h2>
                                    <div>
                                        <h3>Punto Importante 1</h3>
                                        <h3>Punto Importante 2</h3>
                                        <h3>Punto Importante 3</h3>
                                        <a href="">Ver más</a>

                                    </div>




                                </div>
                            </div>

                        </section>




                    </section>
                    <hr className='w-96' />
                </section>
                <section className='p-10'>
                    <h2 className='pb-5'>
                        Qué saber para tu estadía
                    </h2>
                    <div className='flex p-2  gap-5'>
                        <div className='flex flex-col text-center gap-2 font-normal text-base'>
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href="">Ver más</a>
                        </div>
                        <div className='flex flex-col text-center gap-2  font-normal text-base'>
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href="">Ver más</a>
                        </div>
                        <div className='flex flex-col text-center gap-2  font-normal text-base'>
                            <h2>Titulo</h2>
                            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href=''>Ver más</a>
                        </div>

                    </div>
                </section>
            </article>
            <MorePhotos close={closePhotos} visible={visiblePhotos} />
            <FullDescription close={closeDescription} visible={visibleDescription} />
            <MoreServices visible={visibleServices} close={closeServices} />
            <Footer />


        </main >



    );
};

export default BreakdownOfAccommodation;