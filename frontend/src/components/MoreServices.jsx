import React from 'react';

const MoreServices = ({ visible, close }) => {
    if (!visible) return null

    const closeMoldal = (e) => {
        if (e.target.id === 'container')
        close()
    }
    return (
        <div onClick={closeMoldal} id='container' className=' bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm'>
            <div className=' fixed inset-0 w-2/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-scroll'>
                <section className='bg-[#202F59] sticky top-0 text-lg text-[#ffff] p-5'>
                    <i onClick={close} className="fa-solid fa-x"></i>
                </section>
                <section className='text-[#202F59] flex flex-col p-10 gap-5 text-lg'>
                    <h2 className='text-2xl'>Nuestro Servicios</h2>
                    <h3 className='text-[#5333ED]'>Referencia</h3>
                    <i className="flex fa-solid fa-paw text-xs"><h3 className='pl-5'>Se permiten Mascotas</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                    <h3 className='text-[#5333ED]'>Referencia</h3>
                    <i className="flex fa-solid fa-paw text-xs"><h3 className='pl-5'>Se permiten Mascotas</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                    <h3 className='text-[#5333ED]'>Referencia</h3>
                    <i className="flex fa-solid fa-paw text-xs"><h3 className='pl-5'>Se permiten Mascotas</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 3</h3></i>
                    <i className=" flex  fa-regular fa-circle text-xs"><h3 className='pl-5'>Acomodacion 4</h3></i>
                </section>

            </div>
        </div>
    );
};

export default MoreServices;