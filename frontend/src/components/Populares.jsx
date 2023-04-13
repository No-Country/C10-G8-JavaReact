import { Link } from "react-router-dom"


const Card = ({ src = "https://a0.muscache.com/im/pictures/fc78951e-790e-41cf-b554-86daf6bb930c.jpg?im_w=960", ubicacion = "Puerto Libertad, Misiones, Argentina", fecha = "11 al 22 de abril", clasificacion = "4,8", precio = "$78 USD" }) => {
    return (
        <Link to="BreakdownOfAccommodation">
        <div className="mt-11 w-full h-96 transform overflow-hidden rounded-2xl bg-white shadow-lg">
            <img className="h-2/3 w-full object-cover bg-[#C4C4C4] object-center" src={src} alt="Product Image" />
            <div className="flex p-3 h-full">
                <div className="px-3 w-10/12">
                    <h2 className="text-lg text-gray-900">{ubicacion}</h2>
                    <p className=" text-base text-[#3C3C43]/50">{fecha}</p>
                    <p className="text-base font-bold text-gray-900">{precio} <span className="font-normal">noche</span></p>
                </div>
                <div className="py-2 flex flex-row">
                    <i class='bx bx-star bx-sm' style={{color:"#ead201"}}  ></i>
                    <span className='font-semibold text-lg ml-1 pr-4' >{clasificacion}</span>
                </div>
            </div>
        </div>
        </Link>
    )
}

const Populares = () => {
    return (
        <section className='bg-transparent mb-36' >
            <div className='flex justify-center font-base text-6xl pb-10' >
                <h1>Hospedajes Populares</h1>
            </div>
            <div >
                <div className="mx-auto relative -mb-32 z-40 grid max-w-6xl  grid-cols-3 gap-10 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                    <Card />
                    <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-642474359942471549/original/83ec2ed6-940c-4776-8b8b-e9a82c770792.jpeg?im_w=720" />
                    <Card src="https://a0.muscache.com/im/pictures/580a9684-8d59-4cfc-a34e-09c788f64659.jpg?im_w=720" />
                </div>
                <div className='relative bg-[#5333ED]/30 z-20 md:mx-2 sm:mx-10  flex flex-row justify-between h-[12rem] rounded-2xl' ></div>
            </div>
        </section>
    )
}

export default Populares