import React from 'react';
import NavBarOnlyLogo from '../components/NavBarOnlyLogo';
import Footer from '../components/Footer';

const Checkout = () => {
    return (
        <main className='Container'>
            <NavBarOnlyLogo />
            <article className='p-20 gap-10 flex flex-col bg-[#E6E6E6]'>
                <div className='flex justify-start   '>
                    <div className='bg-[#202F59] hover:bg-[#5333ED4D] hover:text-[#202F59] text-[#ffff] p-5 rounded-full w-14 h-14 flex items-center justify-center' >
                        <i className="fa-solid  fa-arrow-left text-3xl"></i>

                    </div>
                </div>
                <h2 className='text-5xl text-[#5333ED]'>Reservar</h2>
                <section className='flex justify-between w-full gap-10'>
                    <section className='w-1/2 flex flex-col gap-5'>
                        <h2 className='text-3xl text-[#202F59] font-bold'>Tu viaje</h2>
                        <div>
                            <div>
                                <h3 className='text-[#202F59] font-semibold text-xl '>Fecha</h3>
                                <div className='flex justify-between'>
                                    <h3>Del dd al dd del mes</h3>
                                    <a href="">Cambiar</a>
                                </div>

                            </div>
                            <div>
                                <h3 className='text-[#202F59]  font-semibold text-xl'>Huéspedes</h3>
                                <div className='flex justify-between'>
                                    <h3>X Huéspedes</h3>
                                    <a href="">Cambiar</a>
                                </div>

                            </div>





                        </div>
                        <hr />
                        <h2 className='text-3xl text-[#202F59] font-bold'>Método de pago</h2>
                        <div>
                            <div>
                                <h2>Pago parcial</h2>
                                <h2>$$$$$</h2>
                            </div>
                            <h5>Pagas la mitad de tu reserva ahora y la otra mitad en el alojamiento</h5>
                            <div>
                                <h2>Pago Total</h2>
                                <h2>$$$$$</h2>
                            </div>
                            <h5>Pagas ahora tu reserva completa</h5>
                        </div>
                        <hr className='h-1 bg-[#5333ED] w-full' />
                        <h2 className='text-3xl text-[#202F59] font-bold pb-5'>Pagá con</h2>
                        <form action="" className='flex w-3/4 flex-col gap-5 '>
                            <select name="" className='h-10 px-3' id="">
                                <option value="">Débito</option>
                                <option value="">Crédito</option>

                            </select>
                            <input type="text" className='h-10 px-3' placeholder='Número de Tarjeta' />
                            <div className='flex justify-between  gap-5   '>
                                <input type="text" className='h-10 w-1/2 px-3' placeholder='Vencimiento' />
                                <input type="text" className='h-10  px-3' placeholder='CVV' />
                            </div>
                            <input type="text" className='h-10   px-3' placeholder='Código Postal' />
                            <select name="" id=""></select>

                        </form>
                        <hr className='h-1 bg-[#5333ED] w-full' />
                        <h2 className='text-3xl text-[#202F59] font-bold pb-5'>Política de cancelación</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at, laudantium, quo ut rem iste, ipsum harum asperiores consectetur in fugiat consequuntur. Amet enim aliquam veniam eaque ea reprehenderit minus.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nobis rerum, perspiciatis provident incidunt blanditiis tempore magni? Iusto dicta eligendi quod et. Consectetur aliquid similique aperiam officiis nobis mollitia quas.
                        </p>
                        <hr className='h-1 bg-[#5333ED] w-full' />
                        <h2 className='text-3xl text-[#202F59] font-bold pb-5'>Normas del hospedaje</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit eveniet officia, non facere eum sapiente sed autem nostrum dignissimos quod? Maxime nulla error dolore quis doloribus? Vitae, quod quia.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas dicta impedit maxime perspiciatis neque facilis, hic earum iste nobis libero exercitationem! Eos, dolorum. Voluptatem harum recusandae perspiciatis omnis eaque!
                        </p>
                        <hr className='h-1 bg-[#5333ED] w-full' />
                        <button className='py-2 bg-[#5333ED] text-[#ffff] rounded-lg text-2xl font-semibold w-2/5'>
                            Realizar Reserva

                        </button>





                    </section>
                    <section className='bg-[#ffff] w-2/5 flex flex-col p-5 gap-5 h-1/5 rounded-2xl'>
                        <div className='flex gap-5'>
                            <img className='bg-gray-200 h-32 w-32 rounded-2xl' src="" alt="" />
                            <div className='flex flex-col justify-center text-[#202F59]'>
                                <h2 className='font-semibold text-xl'>Nombre de Hospedaje</h2>
                                <h3 className='text-lg'>Ubicación</h3>
                                <h3 className='font-semibold text-lg'>Evaluaciones</h3>
                            </div>
                        </div>
                        <hr className='bg-[#202F59] h-0.5' />
                        <div className='flex justify-between  text-[#202F59] text-xl'>
                            <h2>$$$$ por x noches</h2>
                            <h2>$$$$$$$</h2>
                        </div>
                        <div className='flex justify-between text-[#202F59] text-xl '>
                            <h2>Tarifa de servicio</h2>
                            <h2>$$$$$$$</h2>
                        </div>
                        <div className='flex justify-between  text-[#202F59] text-xl'>
                            <h2>Tarifa de servicio</h2>
                            <h2>$$$$$$$</h2>
                        </div>
                       

                        <hr className='bg-[#202F59] h-0.5'  />
                        <div className='flex justify-between  text-[#202F59] font-bold text-xl'>
                            <h2>Total</h2>
                            <h2>$$$$$$$</h2>
                        </div>

                    </section>
                </section>

            </article>

            <Footer />

        </main>
    );
};

export default Checkout;