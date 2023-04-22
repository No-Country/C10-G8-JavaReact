import React, { useState } from 'react';
import logoPerfil from '../assets/logoperfil2.svg'
import { Link } from 'react-router-dom';

const NavbarStyle2 = () => {
   
    const [open, setOPen] = useState(false)
    return (
        <nav className='flex p-10 w-full h-24 items-center justify-between'>
            <Link to="/"> <img className='w-44 h-44' src={logoPerfil} alt="" /></Link> 
            <div className='relative'>
                <input type="text" placeholder='Buscar' className='p-2 w-72 rounded-full' />
                <i className="fa-solid fa-magnifying-glass absolute right-1  top-0 md:top-3 md:right-4 text-black "></i>
            </div>

            <div onClick={() => setOPen(!open)} className=' flex justify-center items-center w-14 h-14 rounded-full bg-[#D1D1D6]'>
                <i className="fa-solid fa-user text-[#ffff] md:text-3xl lg:text-2xl   "></i>
            </div>
            {
                open && (
                    <div className='absolute top-20   z-50 bg-[#ffff] w-25    right-12 rounded-xl     '>
                        <ul className='flex flex-col gap-5 font-semibold border-2 border-[#C4B5FD] rounded-xl p-8'>

                            <Link to='/Profile'><li className='hover:text-[#5333ED] text-[#202F59]  poppins'>Ir a Perfil</li></Link>


                            <Link to='/Favorites'>
                                <li className='hover:text-[#5333ED] text-[#202F59]  poppins'>Favoritos</li>
                            </Link>
                            <Link to='/TravelPage'><li className='hover:text-[#5333ED] text-[#202F59]  poppins'>Viajes</li></Link>


                            
                            <hr />
                            <li className=' text-[#767676]  poppins'>Ser anfitrión</li>
                            <li className=' text-[#767676]  poppins'>gregar alojamiento</li>
                            <hr />
                            <li className='hover:text-[#5333ED] text-[#202F59]  poppins'>Cerrar sesión</li>

                        </ul>

                    </div>

                )
            }



        </nav>
    );
};

export default NavbarStyle2;