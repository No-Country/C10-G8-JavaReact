import React from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'



const DropdownHuespedes = ({ huespedes, onChangeHuespedes }) => {

    const sumar = (opcion) => huespedes[opcion] < 7 ? onChangeHuespedes({ ...huespedes, [opcion]: huespedes[opcion] + 1 }) : false


    const restar = (opcion) => opcion == "adultos" ? huespedes[opcion] > 1 ? onChangeHuespedes({ ...huespedes, [opcion]: huespedes[opcion] - 1 }) : false : huespedes[opcion] > 0 ? onChangeHuespedes({ ...huespedes, [opcion]: huespedes[opcion] - 1 }) : false



    return (
        <div className="absolute min-w-[300px] bottom-12 right-0 rounded-xl overflow-hidden shadow-lg z-50 bg-white border border-[#e9e8e8]">
            <div className=" w-full py-2">
                <div className="py-2 px-3 flex bg-white">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg text-[#202F59]">Adultos</div>
                        <div className="truncate italic text-sm py-2 text-black/40">más de 13 años</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between align-top">
                        <button disabled={huespedes.adultos === 1} className={huespedes.adultos === 1 && "cursor-not-allowed"} onClick={() => restar("adultos")}>
                            <i class='bx bx-minus bx-sm' style={{ color: huespedes.adultos === 1 ? "#EEEEEE" : "#5333ed" }}></i>

                        </button>
                        <p className='px-3 text-xl text-start font-semibold' > {huespedes.adultos} </p>
                        <button onClick={() => sumar("adultos")}>
                            <i class='bx bx-plus bx-sm' style={{ color: "#5333ed" }} ></i>
                        </button>
                    </div>
                </div>

                <div className="py-2 px-3 flex bg-white ">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg text-[#202F59]">Niños</div>
                        <div className="truncate italic text-sm py-2 text-black/40 text-[#e9e8e8]">de 0 a 12 años</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between">
                        <button disabled={huespedes.ninios === 0} className={!huespedes.ninios && "cursor-not-allowed"} onClick={() => restar("ninios")}>
                            <i class='bx bx-minus bx-sm' style={{ color: !huespedes.ninios ? "#EEEEEE" : "#5333ed" }}></i>

                        </button>
                        <p className='px-3 text-lg text-start font-semibold' > {huespedes.ninios} </p>
                        <button onClick={() => sumar("ninios")}>
                            <i class='bx bx-plus bx-sm' style={{ color: "#5333ed" }} ></i>
                        </button>
                    </div>
                </div>

                <div className="py-2 px-3 flex bg-white">
                    <div className="flex-auto text-sm w-24">
                        <div className="font-medium text-lg text-[#202F59]">Mascotas</div>
                    </div>
                    <div className="flex flex-row items-center w-auto justify-between">
                        <button disabled={huespedes.mascotas === 0} className={!huespedes.mascotas && "cursor-not-allowed"} onClick={() => restar("mascotas")}>
                            <i class='bx bx-minus bx-sm' style={{ color: !huespedes.mascotas ? "#EEEEEE" : "#5333ed" }}></i>
                        </button>
                        <p className='px-3 text-xl text-start font-semibold' > {huespedes.mascotas} </p>
                        <button onClick={() => sumar("mascotas")}>
                            <i class='bx bx-plus bx-sm' style={{ color: "#5333ed" }} ></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Hero = () => {
    const [busqueda, setBusqueda] = useState({ destino: "", llegada: "", salida: "" })
    const [huespedes, setHuespedes] = useState({ adultos: 1, ninios: 0, mascotas: 0 })
    const [isOpen, setIsOpen] = useState(false)

    const onChangeHuespedes = (data) => {
        setHuespedes({ ...data })
    }

    const linkFondo = "https://s3-alpha-sig.figma.com/img/c4ec/c202/7e35a2898385d76082c70b00666b2194?Expires=1682294400&Signature=D8uVq6hSsOahJmlER2j6-6NSQSFzn12tfA3wn4b8DP6akEltcucFgHb4Nuje0Rbx5oP5YZv4OjAggU6eVyur8eTELKGewflPQKl~8dopdvN45aptwN9v4-c7ZniXLWOa1zSyObghiE30HQxy27gRhFAG0REHBzZoXDDTIxcAfzcNhLW~-3wSt-pGkuLeN6FjSKtzm-0TaK~ewVrhNNqfooQInPbyttA~FkTopIrkrAQvZ9XWo0Dsjpydy6e8Du5~cXWaJ4t6nn59RqtSBhPY6f3PDtbILA7KOg34ae9xlD9caXtW0vA5WpvIA37YM0sWd3mWH0ti9IcB-Mz1iHkVPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
    return (
        <section className='bg-transparent mb-56 mt-24' >
            <div className="rounded-b-[3rem] py-10 h-[90vh] flex flex-col justify-between bg-no-repeat bg-cover bg-center  shadow-md" style={{ backgroundImage: `url(${linkFondo})` }} >
                <div className='bg-black/20 w-1/2 ml-20 pl-10 pt-5 pb-12 mt-10 text-lg text-white blur-0 rounded-r-3xl backdrop-blur-sm' >
                    <h1 className='py-6 text-7xl w-full' >Encuentra tu alojamiento ideal</h1>
                    <p className='text-left text-2xl font-light w-10/12' >
                        ¡Descubre su hogar perfecto lejos de casa!. Explore propiedades únicas y reserve el alojamiento de sus sueños con solo unos pocos clics.
                    </p>
                </div>
                <div className='bg-[#202F59] text-black -mb-24 mx-24 flex flex-row h-1/3 rounded-2xl py-5 px-16 space-x-6 items-center ' >

                    <div className="flex items-center">
                        <label for="simple-search" className="sr-only">Destino</label>
                        <div className="relative w-full">
                            <input type="text" id="simple-search" onChange={(event) => setBusqueda({ ...busqueda, destino: event.target.value })} value={busqueda.destino} className="bg-white text-[#202F59] italic placeholder:text-[#202F59] text-xl outline-none border-none font-normal rounded-lg block w-full h-16 pr-10 p-2.5 " placeholder="Escriba su destino" required />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer">
                                <i className='bx bx-map bx-md' style={{ color: "#5333ed" }}  ></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center rounded-lg bg-white w-1/3">
                        <label for="simple-search" className="sr-only">Fecha</label>
                        <div className="relative w-full flex flex-row">
                            <input type="text" id="simple-search" className="bg-transparent text-[#202F59] italic placeholder:text-[#202F59] text-xl font-normal outline-none border-none rounded-lg block w-full h-16 pr-10 p-2.5 " placeholder="Llegada" readOnly={true} />
                            <div className="flex items-center hover:cursor-pointer">
                                <i class='bx bx-calendar bx-md' style={{ color: "#5333ed" }} ></i>
                            </div>
                            <input type="text" className="bg-transparent text-[#202F59] italic placeholder:text-[#202F59] text-xl font-normal text-right outline-none border-none rounded-lg block w-full h-16 p-2.5 " placeholder="Salida" readOnly={true} />

                        </div>
                    </div>
                    <div className="flex items-center">
                        <label for="simple-search" className="sr-only">Huespedes</label>
                        <div className="relative w-full">
                            <input type="text" value={huespedes.adultos + huespedes.ninios + huespedes.mascotas === 0 ? "" : huespedes.adultos + huespedes.ninios + huespedes.mascotas} className="bg-white text-[#202F59] outline-none border-none italic placeholder:text-[#202F59] text-xl font-normal rounded-lg block w-full h-16 pr-10 p-2.5 " placeholder="Huespedes" readOnly={true} />
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                <i class='bx bx-down-arrow-alt bx-md' style={{ color: "#5333ed" }}></i>
                            </div>
                            {isOpen && <DropdownHuespedes huespedes={huespedes} onChangeHuespedes={onChangeHuespedes} />}
                        </div>
                    </div>

                    <div className='inline-block text-center items-center my-10' >
                        {
                            <Link to={!busqueda.destino & !busqueda.llegada & !busqueda.salida ?"":"SearchForDestiny?"+busqueda.destino}>

                                <button className={`${!busqueda.destino & !busqueda.llegada & !busqueda.salida ? "bg-[#5333ED]/30 text-[#C2B8FF]" : "bg-[#5333ED] text-white"} py-3 px-9 rounded-3xl  text-xl`} > Buscar </button>
                            </Link>
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero