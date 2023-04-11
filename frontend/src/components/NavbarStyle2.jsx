import React from 'react';
import logoPerfil from '../assets/logoperfil2.svg'

const NavbarStyle2 = () => {
    return (
        <nav className='flex p-10 w-full h-24 items-center justify-between'>
            <img className='w-44 h-44' src={logoPerfil} alt="" />
            <div className='relative'>
                <input type="text" placeholder='Buscar' className='p-2 w-72 rounded-full' />
                <i className="fa-solid fa-magnifying-glass absolute right-1  top-0 md:top-3 md:right-4 text-black "></i>
            </div>
            <div>
                <div className=' flex justify-center items-center w-14 h-14 rounded-full bg-[#D1D1D6]'>
                    <i className="fa-solid fa-user text-[#ffff] md:text-3xl lg:text-2xl   "></i>
                </div>


            </div>



        </nav>
    );
};

export default NavbarStyle2;