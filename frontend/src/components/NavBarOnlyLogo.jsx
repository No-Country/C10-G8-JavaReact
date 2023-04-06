import React from 'react';
import logoPerfil from '../assets/logoperfil2.svg'


const NavBarOnlyLogo = () => {
    return (

        <nav className='flex p-5 w-full h-24 items-center justify-start'>
            <img className='w-44 h-44' src={logoPerfil} alt="" />
        </nav>


    );
};

export default NavBarOnlyLogo;