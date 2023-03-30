import React from 'react'
import left from "../assets/arrow-left.svg"
import right from "../assets/arrow-right.svg"

const CardHospedaje = ({ src = "https://a0.muscache.com/im/pictures/miso/Hosting-642474359942471549/original/83ec2ed6-940c-4776-8b8b-e9a82c770792.jpeg?im_w=720", ubicacion = "Ubicacion", descripcion = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnisperferendis hic asperiores quibusdam quidem voluptates doloremquereiciendis nostrum harum. Repudiandae?" }) => {
    return (
        <a href="#" className="group relative block bg-[#202F59] min-w-96 max-w-96 h-80 rounded-3xl overflow-hidden mx-2">
            <img
                alt="Hospedaje"
                src={src || "https://a0.muscache.com/im/pictures/580a9684-8d59-4cfc-a34e-09c788f64659.jpg?im_w=720"}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-70"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">

                <p className="text-sm font-bold uppercase tracking-widest text-[#15A6A0]">
                    {new Date().toISOString().split("T")[0].split("-").reverse().join("/")}
                </p>
                <p className="text-xl font-bold text-white sm:text-2xl">{ubicacion}</p>

                <div className="mt-20">
                    <div
                        className="w-full"
                    >
                        <p className="text-sm text-white opacity-0">
                            {descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </a>

    )
}

const ExploraHospedajes = () => {
    return (
        <section className='bg-transparent mb-20' >
            <div className='flex justify-center font-base text-6xl' >
                <h1>Explora más hospedajes</h1>
            </div>
            <div className='py-12'>
                <div className="my-6 flex flex-row justify-end gap-10" >
                    <img className='w-11 h-w-11 cursor-pointer' src={left} alt="left" />
                    <img className='w-11 h-w-11 cursor-pointer' src={right} alt="right" />
                </div>
                <div className="w-screen relative flex flex-row ">
                    <CardHospedaje />
                    <CardHospedaje src={false} />
                    <CardHospedaje />
                    <CardHospedaje src={false} />
                </div>
            </div>
        </section>
    )
}

export default ExploraHospedajes