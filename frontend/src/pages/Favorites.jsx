import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const Favorites = () => {
    return (
        <div className='w-screen h-screen bg-[#E9E8E8] overflow-x-hidden'>
            <NavBar />
            <div className='flex flex-col mt-24 min-[540px]:px-20 py-4 text-start gap-20' >
                <div className='w-full'>
                    <a href='#' >
                        <button className='bg-[#D9D9D9] w-14 h-14 rounded-full' >
                            <i className="fa-solid text-3xl fa-arrow-left"></i>
                        </button>
                    </a>
                </div>
                <h1 className='font-light text-6xl' >Favoritos</h1>
                <div className='grid grid-cols-2 gap-x-16 gap-y-12 px-10' >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(el => (
                        <div key={el} className="flex flex-row gap-5 h-[250px]">
                            <div className="w-full bg-[#202F59] rounded-3xl relative overflow-hidden">
                                <img className='w-full h-full opacity-60' src="https://a0.muscache.com/im/pictures/miso/Hosting-45485710/original/336281a4-1084-40b7-9084-465dde86a87b.jpeg?im_w=960" alt="imagen 2" />

                                <span className='absolute bottom-0 font-semibold text-2xl p-6 text-white' >Nombre lista</span>
                            </div>
                            <div className='flex flex-col justify-between w-2/5 h-full space-y-5'>
                                <div className="bg-[#202F59] w-full h-full rounded-3xl overflow-hidden">
                                    <img className='w-full h-full opacity-60' src="https://a0.muscache.com/im/pictures/miso/Hosting-45485710/original/336281a4-1084-40b7-9084-465dde86a87b.jpeg?im_w=960" alt="imagen 2" />
                                </div>
                                <div className="bg-[#202F59] w-full h-full rounded-3xl overflow-hidden">
                                    <img className='w-full h-full opacity-60' src="https://a0.muscache.com/im/pictures/miso/Hosting-45485710/original/336281a4-1084-40b7-9084-465dde86a87b.jpeg?im_w=960" alt="imagen 2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mb-10' >
                    <div className='flex justify-center text-xl items-center gap-10 font-mono font-extrabold'>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>1</h3>
                        </div>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>2</h3>
                        </div>
                        <div className='border-solid border-2 border-black w-8 h-8 rounded-full items-center justify-center flex'>
                            <h3>3</h3>
                        </div>
                        <i className="fa-solid text-3xl fa-arrow-right"></i>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Favorites