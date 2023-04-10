import React from 'react'
import { useState } from 'react'

const LugarDestacado = () => {

    const HOSPEDAJES = [
        { nombre: "Tigre, Argentina", img: ["https://a0.muscache.com/im/pictures/500bb0ab-0ccd-4e21-8bf7-3a32204cd498.jpg?im_w=960","https://a0.muscache.com/im/pictures/70fbf55c-9613-4664-9ed4-4e853a6efa91.jpg?im_w=720","https://a0.muscache.com/im/pictures/b4db2887-5f15-494a-ac1a-00b53d730987.jpg?im_w=720"], descripcion: "A 1.012 kilómetros de distancia - 8 al 15 abr." },
        { nombre: "Caxias Do Sul, Brasil", img: ["https://a0.muscache.com/im/pictures/miso/Hosting-48716549/original/6244888f-5051-4f81-a132-3f022186df9a.jpeg?im_w=960", "https://a0.muscache.com/im/pictures/miso/Hosting-48716549/original/43dcd619-1760-4b21-a6e9-6d945f02bb93.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-48716549/original/2b584efd-6b19-4ca2-9b05-9db0490db56a.jpeg?im_w=720"], descripcion: "A 1.184 kilómetros de distancia - 1 al 7 may." },
        { nombre: "Villa La Angostura, Argentina", img: ["https://a0.muscache.com/im/pictures/e03095b7-e594-4fa9-975f-834dd77e3969.jpg?im_w=960", "https://a0.muscache.com/im/pictures/56242e8a-bea5-430b-9669-c5f449d3f6ed.jpg?im_w=720", "https://a0.muscache.com/im/pictures/05cdd2c9-f6a3-458b-a7db-4fcff6aedb98.jpg?im_w=720"], descripcion: "A 876 kilómetros de distancia - 5 al 12 jun." }
    ]
    const numeroAleatorio = Math.round(Math.random()*2)
    const [lugar, setLugar] = useState(HOSPEDAJES[numeroAleatorio])

    return (
        <div className='bg-transparent h-[80vh] mb-20' >
            <div className='flex flex-row  h-full p-4'>
                <div className='w-1/2 flex flex-col justify-evenly text-[#585858]' >
                    <h2 className='text-7xl' >Vacaciones en {lugar.nombre}</h2>
                    <div>
                        {lugar.descripcion.split("-").map(text => (
                            <p key={text} className='max-sm:text-2xl text-xl' >{text} </p>
                        ))}
                    </div>
                    <a href="#" className='rounded-3xl w-1/2 bg-white text-[#122A29] p-4 text-center max-sm:text-2xl text-xl font-medium' >Ver más</a>
                </div>

                <div className='relative w-1/2'>

                    <div className='w-72 h-[309px] bg-[#202F59] group absolute left-0 top-0 rounded-3xl overflow-hidden shadow-sm shadow-black/60'>
                        <a href="#">
                            <img className='w-full h-full opacity-90 transition-opacity group-hover:opacity-80' src={lugar.img[0]} alt={lugar.nombre} />
                        </a>
                    </div>
                    <div className='w-96 h-64 bg-[#202F59] group absolute bottom-0 left-16 rounded-3xl overflow-hidden shadow-sm shadow-black/60'>
                        <a href="#">
                            <img className='w-full h-full opacity-90 transition-opacity group-hover:opacity-80' src={lugar.img[1]} alt={lugar.nombre} />
                        </a>
                    </div>
                    <div className='w-72 h-72 bg-[#202F59] group absolute -right-14 top-16 rounded-3xl overflow-hidden shadow-sm shadow-black/60'>
                        <a href="#">
                            <img className='w-full h-full opacity-90 transition-opacity group-hover:opacity-80' src={lugar.img[2]} alt={lugar.nombre} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LugarDestacado