import React from 'react';
import NavBarOnlyLogo from '../components/NavBarOnlyLogo';
import Footer from '../components/Footer';

const Checkout = () => {
    return (
        <main className='Container'>
            <NavBarOnlyLogo />
            <article className='p-20 gap-10 flex flex-col'>
                <div className='flex justify-start   '>
                    <div className='bg-[#D9D9D9] p-5 rounded-full w-14 h-14 flex items-center justify-center' >
                        <i className="fa-solid fa-arrow-left text-3xl"></i>

                    </div>
                </div>
                <h2>Reservas</h2>
                <section className='flex'>
                    <section>
                        <h2>Tu viaje</h2>
                        <div></div>
                        <h3>Fecha</h3>
                        <h3>Huéspedes</h3>

                    </section>
                    <section>

                    </section>
                </section>

            </article>

            <Footer />

        </main>
    );
};

export default Checkout;