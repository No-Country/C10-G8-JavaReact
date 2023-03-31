import React, { useState } from 'react'
import perfil from "../assets/logoperfil.svg"
import idioma from "../assets/idioma.svg"
import {Link} from "react-router-dom"

const Logo = ({ className }) => {
    return (
        <svg className={className ? className : ""} width="492" height="115" viewBox="0 0 492 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.8986 5.37459C-6.55286 30.2452 0.0491874 65.3769 7.89507 78.2292C13.2751 56.2607 25.156 62.0891 33.0019 67.0208C33.8986 47.294 50.0387 50.8807 56.3154 56.2607C59.2296 36.534 74.473 40.3448 79.4047 45.949C82.7672 26.4464 96.8898 29.2111 103.839 34.0681C89.3129 -3.05413 51.4584 -0.379055 33.8986 5.37459Z" stroke="#202F59" strokeWidth="4" strokeLinejoin="round" />
            <path d="M30.9964 67.6455C31.5955 68.5734 32.8335 68.84 33.7614 68.2408C34.6894 67.6417 34.9559 66.4037 34.3568 65.4758L30.9964 67.6455ZM31.6211 4.57988C28.2066 10.4389 24.2615 20.2561 23.044 31.5498C21.824 42.8658 23.3342 55.7785 30.9964 67.6455L34.3568 65.4758C27.3135 54.5672 25.8721 42.6347 27.0209 31.9785C28.1721 21.2999 31.916 12.018 35.077 6.59394L31.6211 4.57988Z" fill="#202F59" />
            <path d="M77.5724 45.8541C78.0151 46.8661 79.1944 47.3275 80.2064 46.8848C81.2183 46.442 81.6798 45.2628 81.237 44.2508L77.5724 45.8541ZM81.237 44.2508C78.2961 37.5286 72.744 27.6083 64.9583 19.3108C57.1886 11.0303 46.9642 4.13096 34.7097 4.03522L34.6785 8.0351C45.3788 8.11869 54.6329 14.1524 62.0414 22.0479C69.4339 29.9264 74.7597 39.4251 77.5724 45.8541L81.237 44.2508Z" fill="#202F59" />
            <path d="M81.6464 111.855L31.8811 2.23633" stroke="#202F59" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M39.951 70.8315L53.6253 95.9384M53.6253 95.9384L46.6761 110.285M53.6253 95.9384H98.0106L104.287 110.285M33.6743 112.527H148.224" stroke="#15A6A0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <g clipPath="url(#clip0_23_35)">
                <path d="M226.77 51.9201L219.48 84.0401C217.06 94.7001 206.42 97.9101 198.77 97.9101C193.03 97.9101 188.23 96.2001 185.28 93.8101C184.88 93.4701 184.92 92.9901 185.32 92.4401L188.51 88.3401C188.98 87.7901 189.43 87.5901 189.97 87.9301C192.66 89.6401 195.61 90.4601 199.71 90.4601C203.81 90.4601 210.04 88.8901 211.3 83.3501L212.14 79.6601C209.03 82.5301 205.15 84.5801 200.64 84.5801C191.28 84.5801 186.21 76.7901 188.35 67.3601C190.49 57.9301 199.09 50.1401 208.45 50.1401C212.69 50.1401 215.72 52.1201 217.55 54.9201L218.44 51.9101C218.65 51.3001 219.08 50.8901 219.7 50.8901H225.99C226.6 50.8901 226.92 51.3001 226.78 51.9101L226.77 51.9201ZM214.19 67.3001C215.26 62.5901 212.6 58.3501 207.68 58.3501C202.76 58.3501 198.17 62.3101 197.04 67.3001C195.89 72.3601 198.6 76.3901 203.59 76.3901C208.58 76.3901 213.12 72.0201 214.19 67.3001Z" fill="#15A6A0" />
                <path d="M225.71 67.7099C227.94 57.8699 237.42 50.1499 247.05 50.1499C256.68 50.1499 262.65 57.8699 260.42 67.7099C258.19 77.5499 248.71 85.2699 239.08 85.2699C229.45 85.2699 223.48 77.5499 225.71 67.7099ZM251.74 67.7099C252.97 62.3099 249.94 58.4899 245.16 58.4899C240.38 58.4899 235.61 62.3199 234.39 67.7099C233.17 73.1099 236.12 76.9399 240.97 76.9399C245.82 76.9399 250.52 73.1099 251.74 67.7099Z" fill="#15A6A0" />
                <path d="M316.23 80.9L312.48 84.59C311.99 85.07 311.44 85.14 310.97 84.66L305.6 79.19C301.51 82.54 296.82 85 290.94 85C282.81 85 274.9 80.15 275.06 71.13C275.17 64.84 279.61 60.95 284.38 57.87C281.49 54.86 279.16 51.52 279.23 47.48C279.34 41.4 284.69 36 292.07 36C299.45 36 304.69 41.4 304.58 47.48C304.48 53.08 300.73 56.64 296.44 59.58L305.37 68.53C306.27 67.64 307.11 66.68 307.95 65.73C308.37 65.25 308.91 65.25 309.39 65.66L313.49 69.62C313.96 70.03 314.02 70.58 313.6 71.06L310.95 74.07L316.25 79.4C316.72 79.88 316.71 80.43 316.22 80.9H316.23ZM299.96 73.59L290.16 63.61C286.84 65.8 284.28 67.98 284.22 70.92C284.17 73.93 286.99 76.73 291.43 76.73C294.64 76.73 297.4 75.5 299.96 73.59ZM290.87 53.98C294.05 52.07 296.4 50.15 296.45 47.69C296.49 45.5 294.54 43.66 291.94 43.66C289.34 43.66 287.47 45.51 287.43 47.69C287.39 49.81 288.86 51.79 290.87 53.98Z" fill="#202F59" />
                <path d="M359.14 80.9L355.39 84.59C354.9 85.07 354.35 85.14 353.88 84.66L348.51 79.19C344.42 82.54 339.73 85 333.85 85C325.72 85 317.81 80.15 317.97 71.13C318.08 64.84 322.52 60.95 327.29 57.87C324.4 54.86 322.07 51.52 322.14 47.48C322.25 41.4 327.6 36 334.98 36C342.36 36 347.6 41.4 347.49 47.48C347.39 53.08 343.64 56.64 339.35 59.58L348.28 68.53C349.18 67.64 350.02 66.68 350.86 65.73C351.28 65.25 351.82 65.25 352.3 65.66L356.4 69.62C356.87 70.03 356.93 70.58 356.51 71.06L353.86 74.07L359.16 79.4C359.63 79.88 359.62 80.43 359.13 80.9H359.14ZM342.87 73.59L333.07 63.61C329.75 65.8 327.19 67.98 327.13 70.92C327.08 73.93 329.9 76.73 334.34 76.73C337.55 76.73 340.31 75.5 342.87 73.59ZM333.78 53.98C336.96 52.07 339.31 50.15 339.36 47.69C339.4 45.5 337.45 43.66 334.85 43.66C332.25 43.66 330.38 45.51 330.34 47.69C330.3 49.81 331.77 51.79 333.78 53.98Z" fill="#15A6A0" />
                <path d="M399.13 75.0202C399.02 81.5102 392.32 85.2702 386.17 85.2702C380.43 85.2702 375.83 82.4702 373.49 79.6702C373.09 79.1902 373.23 78.7102 373.51 78.3002L376.24 74.5402C376.66 73.9902 377.14 74.1302 377.74 74.6102C380.44 76.3902 383.36 77.6902 386.02 77.6902C388.21 77.6902 390.34 77.0102 390.37 74.8902C390.46 69.5602 374.23 71.6102 374.43 60.3402C374.54 53.9202 380.21 50.1602 386.22 50.1602C390.52 50.1602 394.87 51.9402 397.61 55.2202C398.01 55.7002 397.87 56.2402 397.52 56.6502L394.86 60.0702C394.44 60.6202 393.97 60.4802 393.36 60.0002C390.79 58.2902 389.24 57.4002 386.85 57.4002C384.73 57.4002 383.14 58.5602 383.11 60.2702C383.02 65.7402 399.33 62.7302 399.11 75.0302L399.13 75.0202Z" fill="#202F59" />
                <path d="M419.63 51.9201L419.54 57.2501C419.53 57.8701 419.11 58.2801 418.5 58.2801H413.72L413.28 83.3601C413.27 83.9801 412.85 84.3801 412.24 84.3801H405.27C404.65 84.3801 404.25 83.9701 404.26 83.3601L404.7 58.2801H399.92C399.3 58.2801 398.9 57.8701 398.91 57.2501L399 51.9201C399.01 51.3101 399.43 50.9001 400.04 50.9001H404.82L404.98 41.6701C404.99 41.0501 405.41 40.6401 406.02 40.6401H412.99C413.61 40.6401 414.01 41.0501 414 41.6701L413.84 50.9001H418.62C419.24 50.9001 419.64 51.3101 419.63 51.9201Z" fill="#202F59" />
                <path d="M455.02 51.9201L454.47 83.3501C454.46 83.9701 454.04 84.3701 453.43 84.3701H447.14C446.53 84.3701 446.19 83.9601 446.13 83.3501L445.91 80.4801C443.47 83.2801 440.09 85.2601 435.71 85.2601C426.35 85.2601 419.65 77.4701 419.82 67.7001C419.99 57.9301 426.96 50.1401 436.32 50.1401C440.56 50.1401 443.94 52.1901 446.41 55.0601L446.67 51.9201C446.75 51.3101 447.1 50.9001 447.71 50.9001H454C454.61 50.9001 455.02 51.3101 455.01 51.9201H455.02ZM445.66 67.6401C445.75 62.5801 442.2 58.3501 437.28 58.3501C432.36 58.3501 428.6 62.3101 428.51 67.6401C428.42 73.0401 431.97 77.0701 436.95 77.0701C441.93 77.0701 445.57 72.7001 445.66 67.6401Z" fill="#202F59" />
                <path d="M491.65 52.0602L473.18 96.5502C472.97 97.1002 472.48 97.3702 471.93 97.3702H465.1C464.35 97.3702 463.95 96.9602 464.3 96.2102L469.36 84.4602L457.01 52.0702C456.75 51.3202 457.1 50.9102 457.85 50.9102H464.89C465.44 50.9102 465.91 51.1802 466.1 51.7302L473.91 73.8702L482.43 51.7302C482.64 51.1802 483.13 50.9102 483.67 50.9102H490.84C491.59 50.9102 491.92 51.3202 491.64 52.0702L491.65 52.0602Z" fill="#202F59" />
            </g>
            <defs>
                <clipPath id="clip0_23_35">
                    <rect width="306.75" height="61.91" fill="white" transform="translate(185 36)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const Dropdown = ({ sesion }) => {
    return (
        <ul className="absolute z-10 flex min-w-[180px] right-3 flex-col gap-2 overflow-auto font-normal tracking-wide rounded-b-3xl border border-blue-gray-50 bg-white py-3 font-sans text-sm text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none">
            {sesion ?
                (<>
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Ir a Perfil
                        </p>
                    </button>
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Favoritos
                        </p>
                    </button>
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Viajes
                        </p>
                    </button>
                    <hr className="my-2 border-blue-gray-50" />
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Ser anfitrión
                        </p>
                    </button>
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Agregar alojamiento
                        </p>
                    </button>
                    <hr className="my-2 border-blue-gray-50" />
                    <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        <p className="block font-sans text-sm text-inherit antialiased">
                            Cerrar sesión
                        </p>
                    </button>
                </>)
                :
                (
                    <>
                        <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                            <p className="block font-sans text-sm text-inherit antialiased">
                                Iniciar sesión
                            </p>
                        </button>
                        <button className="flex w-full cursor-pointer select-none items-center gap-2 rounded-md px-3 pt-[9px] pb-2 text-start outline-none transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                        
                            <p className="block font-sans text-sm text-inherit antialiased">
                                Registrarse
                            </p>
                        </button>
                    </>
                )
            }
        </ul>
    )
}


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenPerfil, setIsOpenPerfil] = useState(false)

    return (
        <nav className="bg-[#E9E8E8]  w-screen z-50 fixed shadow-xl">
            <div className="mx-auto max-w-7xl p-4 px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* <!-- Mobile menu button--> */}
                        <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-[#D1D1D6] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            {isOpen ?
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Link to="/" > <Logo className={"block h-8 w-auto lg:hidden"} /> </Link>
                            <Link to="/" > <Logo className={"hidden h-12 w-auto lg:block"} /> </Link>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex flex-row items-center justify-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="max-[540px]:hidden rounded-full p-1 mx-5 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                            <img className='h-8 w-8 rounded-full' src={idioma} alt="" />
                        </button>

                        {/* <!-- Profile dropdown --> */}
                        <div className="relative ml-3">
                            <div>
                                <button type="button" onClick={() => setIsOpenPerfil(!isOpenPerfil)} className="flex rounded-full bg-[#D1D1D6] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ">
                                    <img className="h-8 w-8 rounded-full p-1" src={perfil} alt="" />
                                </button>
                                {isOpenPerfil && <Dropdown sesion={true} />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute bg-[#E9E8E8] w-full min-[540px]:hidden ${isOpen ? "block" : "hidden"}`}>
                <div className="space-y-1 px-2 pt-2 pb-3">
                    <a href="#" className="text-gray-300 focus:text-gray-700 block rounded-md px-3 py-2 text-base font-medium" >Home</a>

                    <a href="#" className="text-gray-300 focus:text-gray-700 block rounded-md px-3 py-2 text-base font-medium">Buscar destino</a>

                    <a href="#" className="text-gray-300 focus:text-gray-700 block rounded-md px-3 py-2 text-base font-medium">Ser anfitrion</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar