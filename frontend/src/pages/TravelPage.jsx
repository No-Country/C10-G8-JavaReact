import React from 'react';
import NavBarOnlyLogo from '../components/NavBarOnlyLogo';
import Footer from '../components/Footer';
import casas from '../assets/ArrayExample2'

const TravelPage = () => {
    return (
        <main>
            <NavBarOnlyLogo />
            <div className='flex justify-start px-10  p-10'>
                <div className='bg-[#D9D9D9] p-5 rounded-full w-14 h-14 flex items-center justify-center' >
                    <i className="fa-solid fa-arrow-left text-3xl"></i>

                </div>

            </div>
            <h2>Mis Viajes</h2>
            <section>
                {
                    casas.map(house => (
                        <div className='flex w-3/6 h-36' key={house.img}>
                            <div >
                                <img className='h-36 w-96' src={house.img} alt="" />
                            </div>
                            <div>
                                <h2>{house.title}</h2>
                                <h3></h3>
                                <button>Volver a ver</button>

                            </div>
                        </div>

                    ))
                }



            </section>
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
            <Footer />

        </main>
    );
};

export default TravelPage;