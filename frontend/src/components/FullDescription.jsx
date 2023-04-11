import React from 'react';

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
                <section className='flex flex-col gap-5 p-10 bg-white text-[#202F59]'>
                    <h1 className='text-2xl'>Acerca del alojamiento</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere doloribus ducimus omnis in, earum harum, quas perspiciatis fugit ipsa dignissimos eius laudantium quae quam aliquid excepturi, totam impedit nihil assumenda!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit pariatur debitis vitae porro nesciunt accusantium eum ipsam eveniet, reiciendis deleniti sequi esse nostrum quis non labore ab. Blanditiis, accusantium! Dignissimos?
                    </p>
                    <h2 className='text-2xl'>Titulo</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae doloribus debitis, natus ex enim quis. Numquam, rem. Facere cupiditate reprehenderit perspiciatis, sunt ipsum in pariatur recusandae inventore doloremque veritatis officiis.
                    </p>
                    <h2 className='text-2xl'>Titulo</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolore voluptatum alias, ducimus beatae, ea, neque aspernatur necessitatibus quas iusto unde labore saepe? Quod, ullam fugit voluptatibus id aliquam laborum?
                    </p>
                    <h2 className='text-2xl'>Titulo</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ab molestias modi nobis officiis mollitia fugiat! Sapiente quibusdam autem similique enim. Et illum architecto natus iusto qui, sint quos necessitatibus?
                    </p>
                    <h2 className='text-2xl'>Titulo</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque corrupti quisquam dolorem quasi omnis, pariatur, quae fuga distinctio dolor qui. Culpa dolorum tempore distinctio nihil nisi, nostrum nesciunt earum?</p>

                </section>


            </div>

        </div>

    );
};

export default FullDescription;     