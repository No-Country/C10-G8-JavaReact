import React from 'react';
import check from '../assets/check.png';
import { useNavigate } from 'react-router-dom';

const SuccessfullQualification = ({ visible, close, closeModal }) => {
    if (!visible) return null
    const closeAll = ()=>{
        close()
        closeModal()
    }
    return (
        <div id='container' className='poppins bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm'>
            <div className=' fixed inset-0 w-2/5 rounded-2xl h-2/5 m-auto bg-[#ffff]   overflow-y-hidden'>
                <section className='bg-[#202F59] pb-5 sticky top-0 text-lg text-[#ffff] p-5'>
                   
                </section>
                <section className='flex flex-col items-center gap-8 p-10 '>
                    <div className='flex items-center gap-2 text-[#202F59]'>
                        <img src={check} className='w-8' alt="" />
                        <h2 className='tracking-wide'>Su evaluación fue publicada con éxito!</h2>
                    </div>
                    <div className='flex flex-row-reverse  w-full'>
                        <button onClick={closeAll}  className='bg-[#5333ED] text-[#ffff] p-2 rounded-lg px-8'>OK</button>
                    </div>



                </section>
            </div>
        </div>
    );
};
// 
export default SuccessfullQualification;