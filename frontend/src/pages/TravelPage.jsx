import React from 'react';
import NavBarOnlyLogo from '../components/NavBarOnlyLogo';
import Footer from '../components/Footer';
import casas from '../assets/ArrayExample2'

const TravelPage = () => {
    return (
        <main>
            <NavBarOnlyLogo />
            <article className='p-20 gap-10 flex flex-col'>
                <div className='flex justify-start   '>
                    <div className='bg-[#D9D9D9] p-5 rounded-full w-14 h-14 flex items-center justify-center' >
                        <i className="fa-solid fa-arrow-left text-3xl"></i>

                    </div>

                </div>
                <h2 className='text-4xl'>Mis Viajes</h2>
                <section className='px-10 gap-5 flex flex-wrap justify-between items-center  '>
                    {
                        casas.map(house => (
                            <div className='flex w-2/5 h-58  ' key={house.img}>
                                <div className='w-3/4 ' >
                                    <img className='h-full w-full rounded-3xl ' src={house.img} alt="" />
                                </div>
                                <div className=' text-center w-3/4 bg-gray-200 flex flex-col justify-center items-center gap-5'>
                                    <h2 className='text-3xl'>{house.title}</h2>
                                    <h3></h3>
                                    <button className='w-40 text-xl h-14 bg-white rounded-full '>Volver a ver</button>

                                </div>
                            </div>

                        ))
                    }



                </section>
                <div className='flex justify-center text-xl items-center p-10 gap-10 font-mono font-extrabold'>
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
            </article>
            <Footer />

        </main>
    );
};

export default TravelPage;