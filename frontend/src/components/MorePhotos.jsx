import React, { useEffect, useState } from 'react';

import axios from 'axios';
const MorePhotos = ({ visible, close, images }) => {
    const [photos, setPhotos] = useState({})
    if (!visible) return null

    const closeModal = (e) => {
        if (e.target.id === 'container')
            close()
    }



    console.log(setPhotos)



    return (
        <div onClick={closeModal} id='container' className='fixed  inset-0 p-10    bg-black bg-opacity-20 backdrop-blur-sm '>
            <div className='flex justify-end'>
                <i onClick={close} class='bx bx-x text-5xl text-[#ffff]'></i>
            </div>
            <div className='flex gap-5 flex-wrap'>
                {
                    images.map(img => (
                        <img className='w-59 h-44 rounded-xl' src={img} alt="" />
                    ))
                }
            </div>

        </div>
    );
};

export default MorePhotos;