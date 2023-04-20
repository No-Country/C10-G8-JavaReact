import axios from 'axios';
import React, { useEffect, useState } from 'react';

const MoreServices = ({ visible, close, id }) => {
    if (!visible) return null
    const [services, setServices] = useState({})

    useEffect(() => {
        axios.get(`https://goandstay-production.up.railway.app/traer/residencia/${id}`)
            .then(res => setServices(res.data))
    }, [])

    const closeModal = (e) => {
        if (e.target.id === 'container')
            close()
    }
    return (
        <div onClick={closeModal} id='container' className=' bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm'>
            <div className=' fixed inset-0 w-2/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-scroll'>
                <section className='bg-[#202F59] sticky top-0 text-lg text-[#ffff] p-5'>
                    <i onClick={close} className="fa-solid fa-x"></i>
                </section>
                <section className='text-[#202F59] flex flex-col p-10 gap-5 text-lg'>
                    <h2 className='text-2xl'>Nuestro Servicios</h2>
                    <h3 className='text-[#5333ED]'>Referencia</h3>
                    {
                        services.servicio?.map(service => (
                            <div className='flex gap-5 items-center'>
                                <i className="w-5 text-xl flex  fa-regular fa-circle"></i>
                                <h3 className='text-lg'>{service[0].toUpperCase() + service.substring(1)}</h3>
                            </div>

                        ))
                    }
                </section>

            </div>
        </div>
    );
};

export default MoreServices;