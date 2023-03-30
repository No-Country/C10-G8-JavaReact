import React from 'react'

const Hero = () => {
    return (
        <section className='bg-transparent mb-56' >
            <div className="bg-[#888888] rounded-t-3xl rounded-b-[3rem] py-10 h-[80vh] flex flex-col justify-between ">
                <div className='bg-[#D9D9D9] w-1/2 px-8 py-8 mt-10 text-lg text-white' >
                    <h1 className='py-6 mr-60 text-5xl ' >Titulo de Bienvenida</h1>
                    <p className='text-justify' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <div className='bg-[#15A6A0] text-black -mb-40 mx-14 grid grid-cols-5 gap-8 h-1/2 rounded-2xl py-12 px-10' >
                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Destino</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input type="text" className='focus:outline-none bg-transparent w-full text-3xl text-white placeholder:text-[1.3rem] h-full italic' placeholder='Escriba su destino' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1' src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/location.png"} alt="icono" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Llegada</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input type="text" className='focus:outline-none bg-transparent w-full text-3xl text-white placeholder:text-[1.3rem] h-full italic' placeholder='Seleccione fecha' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1 hover:cursor-pointer' src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/calendar.png"} alt="icono" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Salida</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input type="text" className='focus:outline-none bg-transparent w-full text-3xl text-white placeholder:text-xl h-full italic' placeholder='' />
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Huespedes</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input type="text" className='focus:outline-none bg-transparent w-full text-3xl text-white placeholder:text-xl h-full italic' placeholder='Cantidad' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1 hover:cursor-pointer' src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/down.png"} alt="icono" />
                            </div>
                        </div>
                    </div>
                    <div className='inline-block text-center items-center my-10' >
                        <button className=' bg-[#888888] py-3 px-9 rounded-3xl text-[#3C3C43] text-xl' > Buscar </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero