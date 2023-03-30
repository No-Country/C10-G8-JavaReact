import React from 'react'

const Anfitrion = () => {
    return (
        <div className='w-screen h-[80vh] bg-[#ADADAD] px-16 py-8 ' >
            <div className='bg-[#E9E8E8] w-full h-full rounded-3xl p-12 flex flex-row justify-between' >
                <div className='w-[50%] flex flex-col justify-between text-[#585858]' >
                    <h2 className='text-7xl' >Conviértase en anfitrión!</h2>
                    <p className='max-sm:text-2xl text-xl' >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam </p>
                    <a href="#" className='rounded-3xl w-1/2 bg-white text-[#122A29] p-4 text-center max-sm:text-2xl text-xl font-medium' >Quiero ser anfitrión</a>
                </div>
                <div className='w-1/3 h-full bg-[#D9D9D9]' >
                    <img className="h-full w-full object-cover bg-[#C4C4C4] object-center" src={"https://img.freepik.com/foto-gratis/feliz-pareja-asiatica-joven-agente-bienes-raices_7861-1032.jpg?w=740&t=st=1679971967~exp=1679972567~hmac=09e1d062ae05906dec67af378f2186fd2b4262bb18174545b186c97fba830f57"} alt="Product Image" />
                </div>
            </div>
        </div>
    )
}

export default Anfitrion