import axios from 'axios';
import React, { useEffect, useState } from 'react';
import logo from '../assets/goandstay- only.png'
import DesgloseAlojamiento from '../components/DesgloseAlojamiento';
import Footer from '../components/Footer';
import NavbarStyle2 from '../components/NavbarStyle2';
import ArrayExample from '../assets/ArrayExample';
import MorePhotos from '../components/MorePhotos';

const BreakdownOfAccommodation = () => {
    const [visiblePhotos, setVisiblePhotos]= useState(false)

    const closePhotos =()=>{
        setVisiblePhotos(false)
    }



    return (
        <main className='Container   bg-[#ffff] flex-col gap-10 '>
            <NavbarStyle2 />
            <article className='w-full h-full p-10 flex-col'>

                <section className='flex w-full  mb-10 w-1/2'>
                    <section className=' flex flex-col justify-center gap-2 pl-20  w-1/2'>
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


                    </section>

                    <section className='w-1/2  grid gap-5 p-2 grid-rows-3 grid-cols-3 content-center items-center h-3/5'>
                        {
                            ArrayExample.map(img=>(
                               <img className='w-52 h-44' src={img} alt="" />
                            ))
                        }
                        <div
                            className='h-24 w-32 flex  items-center justify-center'><i onClick={()=>setVisiblePhotos(true)} className="fa-solid text-[#5333ED] text-7xl fa-arrow-right"></i>
                        </div>





                    </section>
                </section>
                <section className='flex gap-5 w-full'>
                    <section className='flex flex-col w-2/5 p-5 gap-5'>
                        <div className='rounded-lg p-8  bg-[#202F59] text-[#ffff] p-3'>
                            <h2 className='text-2xl text-center'>Casa en X destino - Anfitrión: Marcelo</h2>
                            <h4>x huespedes - x camas - x habitaciones</h4>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-[#202F59]'>Description Alojamiento</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, necessitatibus praesentium rerum quae sed modi eum dolorem! Rem, iste ex? Voluptates magni modi libero. Ipsum impedit explicabo suscipit fuga aspernatur!asdas...</p>
                            <button className='w-20 p-2 bg-[blue] text-[white] rounded-full'>Leer más</button>
                            <hr />
                        </div>
                    </section>
                    <section className='flex flex-col bg-white h-full p-7 fiexd right-0 h-52  text-[black] rounded-xl w-1/2'>
                        <div className='flex p-2 w-50 h-full'>
                            <h2 className='font-bold text-2xl'>$$$ Noche</h2>

                        </div>
                        <section className='flex justify-between items-center borde-solid border-2 border-gray m-4 p-7 rounded-lg '>
                            <div className='flex flex-col 
                         w-full'>
                                <div className='flex justify-between '>
                                    <h3>Check In</h3>
                                    <i className="fa-solid fa-calendar-days"></i>
                                    <h3>Check Out</h3>
                                </div>
                                <div className='flex justify-between'>
                                    <h3 className='text-italic
                            '>d/mm/aaaa</h3>
                                    <h3 className='text-italic
                            '>d/mm/aaaa</h3>

                                </div>
                                <hr className='w-full' />
                                <div>
                                    <h2>Huéspedes</h2>

                                </div>
                                <div className='relative'>
                                    <h3>x huespedes</h3>
                                    <i className="absolute right-0  fa-solid fa-circle-chevron-down"></i>
                                </div>


                            </div>





                        </section>

                        <button className='rounded-full bg-blue-500 h-10 w-full'>Reservar</button>
                    </section>



                </section>

                <section className='flex w-1/2 gap-3 flex-col '>
                    <h3>Acomodaciones</h3>
                    <i className="fa-solid fa-wifi"><span className='pl-5'>
                        Wifi
                    </span></i>
                    <i className="fa-solid fa-kitchen-set"><span className='pl-5'>Cocina</span></i>

                    <hr />
                </section>

                <section className='flex w-1/2 gap-4 flex-col'>
                    <h3>Servicios</h3>

                    <i className="fa-solid fa-paw"><span>Se permiten Mascotas</span></i>

                    <button className='m-2 rounded-2xl w-3/4 p-2 bg-blue-200 text-black'>Mostrar más servicios</button>

                </section>
                <div className='flex h-20 rounded-full   w-full bg-blue-800'>
                    <ul className='flex m-auto gap-20'>
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
                <section className='p-10  '   >
                    <section className=' flex gap-5 h-20'>
                        <div className=' flex justify-center items-center w-20 h-full rounded-full bg-gray-500'>
                            <i className="fa-solid fa-user md:text-3xl "></i>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2>Anfitrión: Marcelo Apellido</h2>
                            <h3>Anfitrión desde aaaa</h3>
                        </div>


                    </section>
                    <section className='flex  w-full '>
                        <section className='w-1/2 ' >
                            <div className='flex flex-col pt-5 p-5 '>
                                <div className='flex items-center gap-5'>
                                    <i className="fa-solid fa-language"></i>
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
            <MorePhotos close={closePhotos } visible={visiblePhotos}/>
            <Footer />
            
        
        </main >



    );
};

export default BreakdownOfAccommodation;