import React from 'react';
import ArrayExample from '../assets/ArrayExample';
const MorePhotos = ({visible, close}) => {
    if(!visible) return null

    const closeModal =(e)=>{
        if (e.target.id === 'container')
        close()
    }



    return (
        <div onClick={closeModal} id='container' className='fixed  inset-0 p-10    bg-black bg-opacity-20 backdrop-blur-sm '>
            <div className='flex justify-end'>
                <i onClick={close} class='bx bx-x text-5xl text-[#ffff]'></i>
            </div>
            <div className='flex gap-5 flex-wrap'>
                {
                    ArrayExample.map(img => (
                        <img className='rounded-lg w-58 h-44' src={img} alt="" />
                    ))
                }
            </div>

        </div>
    );
};

export default MorePhotos;