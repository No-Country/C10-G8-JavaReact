import { useState,useEffect } from 'react'
import menos from "../assets/minus.svg"
import mas from "../assets/plus.svg"



const DropdownHuespedes = ({huespedes,onChangeHuespedes}) => {

    const sumar = (opcion)=> huespedes[opcion] < 7 ?  onChangeHuespedes({...huespedes,[opcion]:huespedes[opcion] + 1}) : false


    const restar = (opcion)=> opcion == "adultos" ? huespedes[opcion] > 1 ? onChangeHuespedes({...huespedes,[opcion]:huespedes[opcion] - 1}) : false :huespedes[opcion] > 0 ? onChangeHuespedes({...huespedes,[opcion]:huespedes[opcion] - 1}) : false

    

    return (
        <div className="absolute min-w-[300px] bottom-10 right-0 rounded-xl overflow-hidden shadow-lg z-50 bg-white border border-[#e9e8e8]">
            <div className=" w-full py-2">
                <div className="py-2 px-3 flex bg-white">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg">Adultos</div>
                        <div className="truncate italic text-sm py-2 text-[#e9e8e8]">más de 13 años</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between">
                        <button disabled={huespedes.adultos === 1} onClick={()=>restar("adultos")}>
                            <img className={`w-6 h-6 ${huespedes.adultos === 1 && "cursor-not-allowed"}`} src={menos} alt="menos" />
                        </button>
                        <p className='px-3 text-xl text-start font-semibold' > {huespedes.adultos} </p>
                        <button onClick={()=>sumar("adultos")}>
                            <img className={`w-6 h-6 ${huespedes.adultos === 7 && "cursor-not-allowed"}`} src={mas} alt="mas" />
                        </button>
                    </div>
                </div>

                <div className="py-2 px-3 flex bg-white ">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg">Niños</div>
                        <div className="truncate italic text-sm py-2 text-[#e9e8e8]">de 0 a 12 años</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between">
                        <button disabled={huespedes.ninios === 0} onClick={()=>restar("ninios")}>
                            <img className={`w-6 h-6 ${huespedes.ninios === 0 && "cursor-not-allowed"}`} src={menos} alt="menos" />
                        </button>
                        <p className='px-3 text-lg text-start font-semibold' > {huespedes.ninios} </p>
                        <button onClick={()=>sumar("ninios")}>
                            <img className={`w-6 h-6 ${huespedes.ninios === 7 && "cursor-not-allowed"}`} src={mas} alt="mas" />
                        </button>
                    </div>
                </div>

                <div className="py-2 px-3 flex bg-white">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg">Mascotas</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between">
                        <button disabled={huespedes.mascotas === 0} onClick={()=>restar("mascotas")}>
                            <img className={`w-6 h-6 ${huespedes.mascotas === 0 && "cursor-not-allowed"}`} src={menos} alt="menos" />
                        </button>
                        <p className='px-3 text-xl text-start font-semibold' > {huespedes.mascotas } </p>
                        <button onClick={()=>sumar("mascotas")}>
                            <img className={`w-6 h-6 ${huespedes.mascotas === 7 && "cursor-not-allowed"}`} src={mas} alt="mas" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    const [busqueda,setBusqueda] = useState({destino:"",llegada:"",salida:""})
    const [huespedes,setHuespedes] =  useState({adultos:1,ninios:0,mascotas:0})
    const [isOpen,setIsOpen] = useState(false)

    const onChangeHuespedes = (data)=>{
        setHuespedes({...data})
    }

    return (
        <section className='bg-transparent mb-56' >
            <div className="bg-[#888888] rounded-t-3xl rounded-b-[1rem] py-10 h-[80vh] flex flex-col justify-between ">
                <div className='bg-[#D9D9D9] w-1/2 px-8 py-8 mt-10 text-lg text-white' >
                    <h1 className='py-6 mr-60 text-5xl' >Titulo de Bienvenida</h1>
                    <p className='text-justify' >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Lorem ipsum dolor sit amet, consectetur
                    </p>
                </div>
                <div className='bg-[#15A6A0] text-black -mb-40 mx-14 grid grid-cols-5 gap-8 h-1/2 rounded-2xl py-12 px-10' >
                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Destino</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input type="text" onChange={(event)=>setBusqueda({...busqueda,destino: event.target.value})} value={busqueda.destino} className='focus:outline-none bg-transparent w-full text-3xl text-[#d1d1d6] placeholder:text-[#d1d1d6] placeholder:text-[1.1rem] h-full italic' placeholder='Escriba su destino' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1' src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/location.png"} alt="icono" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Llegada</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input readOnly={true} type="text" value={busqueda.llegada} className='focus:outline-none bg-transparent w-full text-3xl text-[#d1d1d6] placeholder:text-[#d1d1d6] placeholder:text-[1.1rem] h-full italic' placeholder='Seleccione fecha' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1 hover:cursor-pointer' src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/calendar.png"} alt="icono" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Salida</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input readOnly={true} type="text" value={busqueda.salida} className='focus:outline-none bg-transparent w-full text-3xl text-[#d1d1d6] placeholder:text-[#d1d1d6] placeholder:text-xl h-full italic' placeholder='' />
                        </div>
                    </div>

                    <div className='flex flex-col' >
                        <h2 className='text-3xl py-3 font-semibold'>Huespedes</h2>
                        <div className='relative flex flex-col border-b-2 justify-end'>
                            <input readOnly={true} type="text" value={huespedes.adultos + huespedes.ninios + huespedes.mascotas} className='focus:outline-none bg-transparent w-full text-3xl text-[#d1d1d6] placeholder:text-[#d1d1d6] placeholder:text-[1.1rem] h-full italic' placeholder='Cantidad' />
                            <div className='absolute insert-y-0 right-0 flex items-end'>
                                <img className='w-6 h-6 mb-1 hover:cursor-pointer' onClick={()=>setIsOpen(!isOpen)} src={"https://raw.githubusercontent.com/MaxiiMartins/recursos-c10-8/main/down.png"} alt="icono" />
                            </div>
                            {isOpen && <DropdownHuespedes huespedes={huespedes} onChangeHuespedes={onChangeHuespedes} />}
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