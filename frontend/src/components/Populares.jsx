

const Card = ({ src = "https://a0.muscache.com/im/pictures/fc78951e-790e-41cf-b554-86daf6bb930c.jpg?im_w=960", ubicacion = "Ubicación", fecha = "", clasificacion = "4,7", precio = "$20.00" }) => {
    const FECHA = new Date().toISOString().split("T")[0].split("-").reverse().join("/")
    return (
        <div className="mt-11 w-full h-80 transform overflow-hidden rounded-2xl bg-white shadow-lg">
            <img className="h-2/3 w-full object-cover bg-[#C4C4C4] object-center" src={src} alt="Product Image" />
            <div className="flex p-3">
                <div className="px-3 w-10/12">
                    <h2 className="text-2xl text-gray-900">{ubicacion}</h2>
                    <p className=" text-base  text-[#3C3C434D]">{fecha || FECHA}</p>
                    <p className="text-lg font-bold text-gray-900">{precio}</p>
                </div>
                <div className="py-4 flex flex-row justify-end items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className='font-semibold text-lg ml-1 pr-4' >{clasificacion}</span>
                </div>
            </div>
        </div>
    )
}

const Populares = () => {
    return (
        <section className='bg-transparent mb-36' >
            <div className='flex justify-center font-base text-6xl pb-10' >
                <h1>Hospedajes Populares</h1>
            </div>
            <div >
                <div className="mx-auto relative -mb-20 z-40 grid max-w-6xl  grid-cols-3 gap-20 p-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                    <Card />
                    <Card src="https://a0.muscache.com/im/pictures/miso/Hosting-642474359942471549/original/83ec2ed6-940c-4776-8b8b-e9a82c770792.jpeg?im_w=720" />
                    <Card src="https://a0.muscache.com/im/pictures/580a9684-8d59-4cfc-a34e-09c788f64659.jpg?im_w=720" />
                </div>
                <div className='relative bg-[#15A6A0] z-20 md:mx-2 sm:mx-10  flex flex-row justify-between h-[10rem] rounded-2xl' ></div>
            </div>
        </section>
    )
}

export default Populares