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
        <main className='container w-screen h-full  bg-[#03052e] flex-col gap-10  text-white'>
            <article className='w-full h-full p-5'>
                <header className='w-full md:h-16 h-10 flex justify-between items-center mb-10  '>
                    <div className='flex justify-center items-center w-20 h-full md:h-15 md:w-15 rounded-full bg-white '>
                        <img className='  w-15 h-10 md:w-7/12' src={logo} alt="Soy un Logo" />
                    </div>

                    <nav className='relative ' >
                        <input type="text" className='rounded-full md:h-10 w-96 ' placeholder='   Buscar' />
                        <i className="fa-solid fa-magnifying-glass absolute right-2  top-1 md:top-3 md:right-4 text-black "></i>

                    </nav>

                    <div className=' flex justify-center items-center w-20 h-full rounded-full bg-gray-500'>
                        <i className="fa-solid fa-user md:text-3xl "></i>
                    </div>
                </header>

                <section className='flex w-full max-h-max mb-10'>
                    <section className=' flex flex-col justify-center  pl-10   w-3/4'>
                        <h1 className='text-20 h-50 pb-3 md:text-4xl'>Nombre de Vivienda</h1>

                        <div className='flex items-center gap-2 md:text-xl'>
                            <i className=" fa-regular fa-star"></i>
                            <h3 className='' >
                                4,7. Evaluaciones</h3>
                            <hr className='bg-black h-5 text-[black]' />
                        </div>
                        <div className='flex items-center gap-2 md:text-xl'>
                            <i className="pl-1 fa-solid fa-location-dot"></i>
                            <h3>Ubicación</h3>

                        </div>


                    </section>

                    <section className='w-full   gap-5 p-2 flex flex-wrap content-center items-center'>
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <img className='h-24 w-32' src="https://picsum.photos/200/300" alt="" />
                        <div
                            className='h-24 w-32 flex items-center justify-center'><div className='rid-row-3 bg-gray-500 h-10 w-10 flex justify-center items-center rounded-full'><i className="fa-solid fa-arrow-right"></i></div></div>





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


                            </div>{



                        /* <div>
                            
                            
                            <hr className='w-50'/>
                            
                           

                        </div>
                      

                        <div>
                            
                            
                            <hr />
                            
                        </div> */}


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
                        <div className='flex flex-col text-center gap-2'>
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href="">Ver más</a>
                        </div>
                        <div className='flex flex-col text-center gap-2'>
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href="">Ver más</a>
                        </div>
                        <div className='flex flex-col text-center gap-2'>
                            <h2>Titulo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati enim eos facilis blanditiis? Itaque, fugiat necessitatibus. Aspernatur veniam cum odio tempora, necessitatibus magnam laboriosam mollitia aliquid deleniti ipsam quas ex.</p>
                            <a href="">Ver más</a>
                        </div>

                    </div>
                </section>
            </article>
            <footer className='flex flex-col w-full p-20 text-black gap-5 bg-[#5F5F5F]'>
                <section className='flex justify-between '>
                    <div className='flex flex-col gap-5 bg-green'>
                        <h2 className='text-[#B7B7B7] font-medium text-2xl'>G&&S</h2>
                        <ul className='flex flex-col gap-5 text-lg' >
                            <li>Home</li>
                            <li>Filtro</li>
                            <li>Perfil</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#B7B7B7] font-medium text-2xl'>Como ser anfitrión</h2>
                        <ul className='flex flex-col gap-5 text-lg'>
                            <li>Quiero ser anfitrión</li>
                            <li>Información sobre de anfitriones</li>
                            <li>Ayuda</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#B7B7B7] font-medium text-2xl'>Suscríbase al <br />
                            newsletter</h2>
                        <p className='text-lg'>Suscríbase y entérese de <br />
                         nuevos hospedajes y <br />
                         descuento. Escriba su mail.</p>
                        <div>
                            <input type="text" placeholder='Correo electrónico' />
                            <button className='bg-black text-white p-2'>Suscribirse</button>
                        </div>

                    </div>

                </section>

                <hr className='border-1 border-solid border-black' />
                <div className='flex justify-between'>
                    <h5 className='text-[#C2B8FF] text-sm'>Copyright 2023 Go && Stay</h5>
                    <div className='flex gap-5'>
                        <div className='h-5 w-5 bg-[#FFFFFF] flex items-center justify-center'>
                            <i className="fa-brands fa-facebook-f"></i></div>
                        <div className='h-5 w-5 bg-[#FFFFFF] flex items-center justify-center'>
                            <i className="fa-brands fa-instagram"></i></div>
                        <div className='h-5 w-5 bg-[#FFFFFF] flex items-center justify-center'>
                            <i className="fa-brands fa-twitter"></i></div>
                    </div>

                </div>


            </footer>
        </main >



    );
};

export default BreakdownOfAccommodation;