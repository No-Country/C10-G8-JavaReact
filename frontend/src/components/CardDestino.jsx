import React from 'react'

const CardDestino = ({ src = "https://a0.muscache.com/im/pictures/fc78951e-790e-41cf-b554-86daf6bb930c.jpg?im_w=960", ubicacion = "Ubicacion", descripcion = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnisperferendis hic asperiores quibusdam quidem voluptates doloremquereiciendis nostrum harum. Repudiandae?" }) => {
    return (
        <a href="#" className="group relative block bg-[#202F59] min-w-96 max-w-96 h-80 rounded-3xl overflow-hidden mx-6">
            <img
                alt="Hospedaje"
                src={src}
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-50"
            />

            <div className="relative p-4 sm:p-6 lg:p-8">

                <p className="text-sm font-bold uppercase tracking-widest text-[#15A6A0]">
                    {new Date().toISOString().split("T")[0].split("-").reverse().join("/")}
                </p>
                <p className="text-xl font-bold text-white sm:text-2xl">{ubicacion}</p>

                <div className="mt-20">
                    <div
                        className="translate-y-8 transform  opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <p className="text-sm text-white">
                            {descripcion}
                        </p>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default CardDestino