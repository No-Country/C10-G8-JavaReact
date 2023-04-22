import React from 'react';
import TextHost from '../assets/TextHost';

const FullDescription = ({visible, close}) => {
    if(!visible) return null
    const closeModal =(e)=>{
        if (e.target.id === 'container')
        close()
    }
    return (
        <div onClick={closeModal} id='container' className=' bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm'>
            <div className=' fixed inset-0 w-4/5 rounded-2xl h-3/5 m-auto bg-[#ffff]   overflow-y-scroll'>
                <section className='bg-[#202F59] sticky top-0 text-2xl text-[#ffff] p-5'>
                    <i onClick={close} className="fa-solid fa-x"></i>
                </section>
                <section className='flex  flex-col gap-5 p-10 bg-white text-[#202F59]'>
                    <h1 className='text-2xl'>Acerca del alojamiento</h1>
                    <p className=' text-justify tracking-wider'>{TextHost[1]}
                    </p>
                   

                </section>


            </div>

        </div>

    );
};

export default FullDescription;     