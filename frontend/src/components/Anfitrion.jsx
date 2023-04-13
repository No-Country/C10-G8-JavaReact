import React from 'react'

const Anfitrion = () => {
    return (
        <div className='w-screen h-[80vh] bg-[#EFEFEF] px-16 py-8 ' >
            <div className='bg-white w-full h-full rounded-3xl p-12 flex flex-row justify-between border border-[#5333ED]' >
                <div className='w-[50%] flex flex-col justify-between text-[#202F59]' >
                    <h2 className='text-7xl' >Conviértase en anfitrión!</h2>
                    <p className='max-sm:text-2xl text-xl' >¡Únase a nuestra comunidad de anfitriones hoy y comience a compartir su espacio con viajeros de todos los rincones del mundo!</p>
                    <a href="#" className='rounded-3xl w-1/2 bg-[#5333ED] text-white p-4 text-center max-sm:text-2xl text-xl font-medium' >Quiero ser anfitrión</a>
                </div>
                <div className='w-1/3 h-full bg-[#D9D9D9]' >
                    <img className="h-full w-full object-cover bg-[#C4C4C4] object-center" src={"https://img.freepik.com/foto-gratis/feliz-pareja-asiatica-joven-agente-bienes-raices_7861-1032.jpg?w=740&t=st=1679971967~exp=1679972567~hmac=09e1d062ae05906dec67af378f2186fd2b4262bb18174545b186c97fba830f57"} alt="Product Image" />
                </div>
            </div>
        </div>
    )
}

export default Anfitrion