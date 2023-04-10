import React, { useState } from 'react'
import left from "../assets/arrow-left.svg"
import right from "../assets/arrow-right.svg"
import { Link } from 'react-router-dom'

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


const Card = ({ title, subtitle, src }) => {

    return (
        <Link to={"/"} className="flex justify-center w-96 h-72 bg-[#202F59] items-center drop-shadow-md rounded-3xl group relative overflow-hidden hover:shadow-xl">
            <img
                alt="Hospedaje"
                src={src || "https://a0.muscache.com/im/pictures/580a9684-8d59-4cfc-a34e-09c788f64659.jpg?im_w=720"}
                className="absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-60"
            />
            {/* icono fav */}
            <svg className='w-7 h-w-7 absolute top-0 right-0 m-4' viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.00198 2.11253C5.14893 0.375845 8.29724 0.708428 10.0339 2.85538L11.0575 4.1207L12.1589 2.799C13.9267 0.677616 17.0795 0.390996 19.2009 2.15882C21.3223 3.92664 21.6089 7.07946 19.8411 9.20084L11 20L2.25914 9.14447C0.522451 6.99752 0.855035 3.84922 3.00198 2.11253Z" fill="#E2006D" fill-opacity="0.3" />
                <path d="M10.0339 2.85538L10.8114 2.22647L10.0339 2.85538ZM11.0575 4.1207L10.28 4.74961L11.046 5.69655L11.8257 4.76089L11.0575 4.1207ZM12.1589 2.799L12.9271 3.43919V3.43919L12.1589 2.799ZM19.8411 9.20084L19.0728 8.56064L19.0673 8.56737L19.8411 9.20084ZM11 20L10.2211 20.6272C10.41 20.8618 10.6947 20.9988 10.9959 21C11.2972 21.0012 11.5829 20.8666 11.7738 20.6335L11 20ZM2.25914 9.14447L3.03803 8.51731L3.03662 8.51556L2.25914 9.14447ZM10.8114 2.22647C8.72738 -0.349871 4.94941 -0.748971 2.37307 1.33505L3.63089 2.89001C5.34845 1.50066 7.86709 1.76673 9.25644 3.48429L10.8114 2.22647ZM11.8349 3.4918L10.8114 2.22647L9.25644 3.48429L10.28 4.74961L11.8349 3.4918ZM11.3907 2.15882L10.2892 3.48052L11.8257 4.76089L12.9271 3.43919L11.3907 2.15882ZM19.8411 1.3906C17.2954 -0.730789 13.512 -0.386845 11.3907 2.15882L12.9271 3.43919C14.3414 1.74208 16.8636 1.51278 18.5607 2.92704L19.8411 1.3906ZM20.6093 9.84103C22.7307 7.29537 22.3868 3.51198 19.8411 1.3906L18.5607 2.92704C20.2578 4.34129 20.4871 6.86355 19.0729 8.56066L20.6093 9.84103ZM2.37307 1.33505C-0.203264 3.41907 -0.602364 7.19704 1.48166 9.77338L3.03662 8.51556C1.64727 6.798 1.91333 4.27936 3.63089 2.89001L2.37307 1.33505ZM11.7738 20.6335L20.6149 9.83432L19.0673 8.56737L10.2262 19.3665L11.7738 20.6335ZM1.48025 9.77163L10.2211 20.6272L11.7789 19.3728L3.03803 8.51731L1.48025 9.77163Z" fill="#E2006D" />
            </svg>
            <div className="translate-y-8 transform  opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100  text-white text-center">
                <h2 className='text-xl font-bold' >{title}</h2>
                <span className='text-base font-normal' >{subtitle}</span>
            </div>
        </Link>
    );

}

const Carrousel = () => {
    const initalState = [
        { idx: 1, pos: 1, text: "Cabañas Canyon Creek", text2: "Granite Falls, Washington, E.E.U.U.", src: "https://s3-alpha-sig.figma.com/img/bfc7/83de/0d3edc4a057d01ca0107d32a2095682d?Expires=1682294400&Signature=nqhgFMCJRBTIs3BsMtkojyrXRUGVdqmGSTKwBV6de5WwKyNSXh9caRhs03mmJhFYNwg3G420wR7KXLVZKWJBU42XUZmPMnh~d3R6Z1htgw2~kCqDd4IromWIZgspjD9ferTtSsZVU3O1q~duQrPxRrjKtG5xVE58Vkoh553am63uJqqB7srklIbJ-sEwefV5yuE84BOvUDTsX4UwbK0F1fJyneXKlSz7xBvoqxDPoLfN2XlwPVIYrInnTH3KRY0OYa5AEb581ktG9~HpvI5Z30hLeoarPN4O-ftZX7I5kgfife536hCTXsoEznND5jAPsj41dfhiXHHP~5-0th8a5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: true },
        { idx: 2, pos: 2, text: "Encantadora cabaña", text2: "Senja, Botnhamn, Noruega", src: "https://s3-alpha-sig.figma.com/img/6fb0/65c4/6986bfa158006504ca4a64fb5f139cf5?Expires=1682294400&Signature=ZB2U0ESo1XxzzTaPm06H21NVrO8VvQnkqQqdNMuvhva6pydATFK84QFslW2mL6hVROrwvNG2ynw6Nm36UzRKQ6ZumQDgdDC4zmpqH2CRG1w1e74hIwsB8CORdWw~Jk7BhQDvyRE-vdiD-owK1oBnAN~~K~pAV0e0gtyZSuIK1OvCu5I3CROCi2SGxqcRDgoi1Q-PUX7dHiBEx2HGqttVBzNVJL~rusU9nVr109wB~L2D-EReIL95WjVk~xDbEc5y9vlVzo7-g31K86usHeqKMoVHH6NPfLldcr-cZUlSxccpMQKv8RyIkfW9euF-U1wW-wQ2JhOrWrpIoGy7H8rDTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: true },
        { idx: 3, pos: 3, text: "Apartamento", text2: "Medellín, Antioquia, Colombia", src: "https://s3-alpha-sig.figma.com/img/472f/7606/7b93e900d5faa5a068cd97dd707be3f3?Expires=1682294400&Signature=l5n4PUkTvPz-SFigm2dnNpQLMKaMsXerHCutdSbwz~8WN8ehi-ZiW1uW12-ZitHPjvS9YclpQNIC-tygjXkIV~dcn8iNB0aPNIn13LvEDikDttBvNvYYFw~ORaJ6uXvcxviZqEJH~OYHSFVrCba2RDfXk16q6ZnfDOs5yYNEojbtozyZJeE2idGsPBODto58FhNxKUO51V4Ep1d-rM4~xaXe0706wZaqwwNt3nJujjjLTnX-Z9-GL-puYuL-ctJyGnOg~ceSKcpfJPUQIoHOpfcU5VejX-~rT9RjRCXxtFaxzpodPB7EMla8svUg0LgTcXLyFofxq1UkHe~Hi6YFQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: true },
        { idx: 4, pos: 4, text: "Apart en complejo residencial", text2: "Ciudad del Cabo, Sudáfrica", src: "https://s3-alpha-sig.figma.com/img/b58f/745a/24e304fc5adab3d373c9fb3c6ba69b87?Expires=1682294400&Signature=UAJx~j2rPoKW9gYRrJADJb0xAcuExotRiLq7owiP1nud4-oJvIHJavIjFJiKjpQl894C8CENHcRn~oTNzuPhS3qz6kvT8MvF15NC6IbHwStYU-uTPijr36bJOPeU~KHyVrSAAKiFjroGhmeNqLQasxfBO39~EBO7aSMltMK4-4veLyumT-FrnJ0fMQwcxaFWt~909Kk7ovZG~ZxhYCeLtlW1siNLADJVZsUa4cdX2TNHxICW7~2Hiqq9NSiT3lsfXy2Fj47DOm7JnByM9SCTrhUvar0zick86fLu66~caA6e6dAD6vhhxQlvKTKtzHuwIAxM-bCSS1YT0urFjgIevg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: true },
        { idx: 5, pos: 5, text: "Apart en complejo residencial", text2: "Santo Domingo, República Dominicana", src: "https://s3-alpha-sig.figma.com/img/ec16/4c4b/91ecaa62e05e84609bf0869904456bf6?Expires=1682294400&Signature=C2A0LON~wfW1dxdSNQerTu4GbMCt0kzCfWFurvFwX4CFZRcxfRZHvTVgMNS4pmVLz~7riLraMhwC8KUOUENk7cQxacErO5131gmG0WV2LIpIfhTyE-zMIXrSbEf8UmHf3Nn3JhcHsNlJrd~kxFDpwdaEecluoEZ7PI~BiL5-19-cPkj30qPlzPKOz6kYIX9lOJhMP7XASfMOLADEG1jbLSJCOEj7GCjTKaTsQeNZlt5fQZj0ZGtR8DtF3gMuQXfV-5xu2Z1dqBNMIbrODIJGjfN3bh4AUw7swkeFnkBfH-KgdJGS8Y50vVRkZQW3HxZTyVIj9V43mbGHhjFoGBez4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: false },
        { idx: 6, pos: 6, text: "Cabaña residencial", text2: "Kittilä, Levi, Finlandia", src: "https://s3-alpha-sig.figma.com/img/bfc7/83de/0d3edc4a057d01ca0107d32a2095682d?Expires=1682294400&Signature=nqhgFMCJRBTIs3BsMtkojyrXRUGVdqmGSTKwBV6de5WwKyNSXh9caRhs03mmJhFYNwg3G420wR7KXLVZKWJBU42XUZmPMnh~d3R6Z1htgw2~kCqDd4IromWIZgspjD9ferTtSsZVU3O1q~duQrPxRrjKtG5xVE58Vkoh553am63uJqqB7srklIbJ-sEwefV5yuE84BOvUDTsX4UwbK0F1fJyneXKlSz7xBvoqxDPoLfN2XlwPVIYrInnTH3KRY0OYa5AEb581ktG9~HpvI5Z30hLeoarPN4O-ftZX7I5kgfife536hCTXsoEznND5jAPsj41dfhiXHHP~5-0th8a5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: false },
        { idx: 7, pos: 7, text: "Domo", text2: "Punta del Diablo, Uruguay", src: "https://s3-alpha-sig.figma.com/img/bfc7/83de/0d3edc4a057d01ca0107d32a2095682d?Expires=1682294400&Signature=nqhgFMCJRBTIs3BsMtkojyrXRUGVdqmGSTKwBV6de5WwKyNSXh9caRhs03mmJhFYNwg3G420wR7KXLVZKWJBU42XUZmPMnh~d3R6Z1htgw2~kCqDd4IromWIZgspjD9ferTtSsZVU3O1q~duQrPxRrjKtG5xVE58Vkoh553am63uJqqB7srklIbJ-sEwefV5yuE84BOvUDTsX4UwbK0F1fJyneXKlSz7xBvoqxDPoLfN2XlwPVIYrInnTH3KRY0OYa5AEb581ktG9~HpvI5Z30hLeoarPN4O-ftZX7I5kgfife536hCTXsoEznND5jAPsj41dfhiXHHP~5-0th8a5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: false },
        { idx: 8, pos: 8, text: "Apartamento", text2: "Madrid, España", src: "https://s3-alpha-sig.figma.com/img/bfc7/83de/0d3edc4a057d01ca0107d32a2095682d?Expires=1682294400&Signature=nqhgFMCJRBTIs3BsMtkojyrXRUGVdqmGSTKwBV6de5WwKyNSXh9caRhs03mmJhFYNwg3G420wR7KXLVZKWJBU42XUZmPMnh~d3R6Z1htgw2~kCqDd4IromWIZgspjD9ferTtSsZVU3O1q~duQrPxRrjKtG5xVE58Vkoh553am63uJqqB7srklIbJ-sEwefV5yuE84BOvUDTsX4UwbK0F1fJyneXKlSz7xBvoqxDPoLfN2XlwPVIYrInnTH3KRY0OYa5AEb581ktG9~HpvI5Z30hLeoarPN4O-ftZX7I5kgfife536hCTXsoEznND5jAPsj41dfhiXHHP~5-0th8a5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4", active: false },
    ];

    const [cards, setCards] = useState(initalState);


    const handleLeftClick = () => {
        const prevState = [...cards];
        // find next inactive card index - top
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;
        // maximize pos
        prevState.find((f) => f.idx === nextCardIdx).pos =
            Math.max.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) + 1;

        // update state
        setCards(prevState);
    };

    const handleRightClick = () => {
        const prevState = [...cards];
        // find next inactive card index - bottom
        const nextCardIdx = prevState
            .filter((ft) => ft.active === true)
            .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
            .pop(1).idx;
        // minimize pos
        prevState.find((f) => f.active === false).pos =
            Math.min.apply(
                null,
                prevState.map(function (o) {
                    return o.pos;
                })
            ) - 1;
        // reset
        prevState.find((f) => f.active === false).active = true;
        // update
        prevState.find((f) => f.idx === nextCardIdx).active = false;

        // update state
        setCards(prevState);
    };

    return (
        <>
            <div className='flex justify-center items-center gap-3 '>
                {cards
                    .filter((f) => f.active === true)
                    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
                    .map((card, index) => (
                        <Card key={index} src={card.src} title={card.text} subtitle={card.text2} />
                    ))}
            </div>
            <div className='flex flex-row text-center justify-center py-10' >
                {/* flecha izq */}
                <svg onClick={() => handleLeftClick()} className='w-12 h-w-12 cursor-pointer' viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 9.66663L9.66667 29L29 48.3333" stroke="#5333ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.66669 29L48.3331 29" stroke="#5333ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* flecha izq */}
                <svg onClick={() => handleRightClick()} className='w-12 h-w-12 cursor-pointer' viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29 9.66675L48.3333 29.0001L29 48.3334" stroke="#5333ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M48.3333 29L9.66686 29" stroke="#5333ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </>
    )
}

const ExploraHospedajes = () => {
    return (
        <section className='bg-transparent mb-20' >
            <div className='flex justify-center font-base text-6xl' >
                <h1>Explora más hospedajes</h1>
            </div>
            <div className='py-24'>
                <Carrousel />
            </div>
        </section>
    )
}

export default ExploraHospedajes