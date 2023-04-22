import React, { useEffect, useState } from "react";
import NavBarOnlyLogo from "../components/NavBarOnlyLogo";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Calendar } from "@syncfusion/ej2-react-calendars";
import ModalCountries from "../components/ModalCountries";
import BookSuccesfull from "../components/BookSuccesfull";
import LoadingPage from "../components/LoadingPage";

const Checkout = () => {
  const [validate, setValidate] = useState({});
  const [card, setCard] = useState(false);
  const [countries, setCountries] = useState(false);
  const [booked, setBooked] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const values = {
    service: 25,
    taxes: 78,
  };
  const closeCountries = () => {
    setCountries(false);
  };
  const closeBooked = () => {
    setBooked(false);
  };
  const timexweek = validate.precio * 7;
  const total = Math.round(timexweek + values.service + values.taxes);

  useEffect(() => {
    axios
      .get(
        `https://c10-g8-javareact-production-740a.up.railway.app/residencia/traer/${id}`
      )
      .then((res) => setValidate(res.data));
  }, [id]);

  return (
    <main className="Container">
      <NavBarOnlyLogo />
      <article className="p-20 gap-10 flex flex-col bg-[#ffff]">
        <Link to="/BreakdownOfAccommodation">
          <div className="flex justify-start   ">
            <div className="bg-[#202F59] hover:bg-[#5333ED4D] hover:text-[#202F59] text-[#ffff] p-5 rounded-full w-14 h-14 flex items-center justify-center">
              <i className="fa-solid  fa-arrow-left text-3xl"></i>
            </div>
          </div>
        </Link>

        <h2 className="text-5xl text-[#5333ED]">Reservar</h2>
        <section className="flex justify-between w-full gap-10">
          <section className="w-1/2 flex flex-col gap-5">
            <h2 className="text-5xl text-[#202F59] font-bold pb-6">Tu viaje</h2>
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-3 italic">
                <h3 className="text-[#202F59] font-semibold text-4xl ">
                  Fecha
                </h3>
                <div className="flex justify-between">
                  <h3 className="text-[#5333ED] text-opacity-30 text-lg">
                    Del dd al dd del mes
                  </h3>
                  <h2
                    className="not-italic  border-b-2 border-solid border-[#000]
"
                  >
                    Cambiar
                  </h2>
                </div>
              </div>
              <div className="flex flex-col gap-3 italic">
                <h3 className="text-[#202F59]  font-semibold text-4xl">
                  Huéspedes
                </h3>
                <div className="flex justify-between">
                  <h3 className="text-[#5333ED] text-opacity-30 text-lg">
                    X Huéspedes
                  </h3>
                  <h2
                    className="not-italic border-b-2 border-solid border-[#000] 
                  "
                  >
                    Cambiar
                  </h2>
                </div>
              </div>
            </div>
            <hr className="h-1 my-10 bg-[#5333ED] w-full" />
            <h2 className="text-5xl text-[#202F59] font-bold">
              Método de pago
            </h2>
            <div className="pt-5 flex flex-col gap-4">
              <div className="flex justify-between p-5 bg-[#ffff] rounded-lg text-xl border-2 border-solid border-[#5333ED] border-opacity-30">
                <h2>Pago parcial</h2>
                <h2 className="font-bold">${total / 2}</h2>
              </div>
              <h5 className="px-5 italic text-[#000] text-opacity-30">
                Pagas la mitad de tu reserva ahora y la otra mitad en el
                alojamiento
              </h5>
              <div className="flex justify-between p-5 bg-[#ffff] rounded-lg text-xl border-2 border-solid border-[#5333ED] border-opacity-30">
                <h2>Pago Total</h2>
                <h2 className="font-bold">${total}</h2>
              </div>
              <h5 className="px-5 italic text-[#000] text-opacity-30">
                Pagas ahora tu reserva completa
              </h5>
            </div>
            <hr className="h-1 bg-[#5333ED] w-full" />
            <h2 className="text-3xl text-[#202F59] font-bold pb-5">Pagá con</h2>
            <form action="" className="flex w-3/4 flex-col gap-5 ">
              <div
                className={`relative flex items-center justify-between text-lg rounded-lg p-5 ${
                  card
                    ? "bg-[#5333ED] bg-opacity-30  border-2 border-solid border-[#5333ED] border-opacity-30  w-full  rounded-lg text-[#5333ED]"
                    : "bg-white  border-2 border-solid border-[#5333ED] border-opacity-30   text-[#5333ED]"
                }`}
              >
                <div className=" flex items-center gap-3">
                  <i className="fa-regular fa-credit-card"></i>
                  <h2>Tipo de Tarjeta</h2>
                </div>
                <i
                  onClick={() => setCard(!card)}
                  className={`cursor-pointer fa-solid fa-arrow-${
                    card ? "up" : "down"
                  }`}
                ></i>
              </div>

              {card && (
                <div className=" flex flex-col items-center gap-3">
                  <div className="cursor-pointer relative flex items-center justify-between  bg-[#5333ED] bg-opacity-30 p-1  border-2 border-solid border-[#5333ED] border-opacity-30  w-full  rounded-lg text-[#ffff] ">
                    <h2 className="text-xl px-2">Débito</h2>
                  </div>
                  <div className="cursor-pointer relative flex items-center justify-between  bg-[#5333ED] bg-opacity-30 p-1   border-2 border-solid border-[#5333ED] border-opacity-30  w-full rounded-lg text-[#ffff] ">
                    <h2 className="text-xl px-2">Crédito</h2>
                  </div>
                </div>
              )}

              <div className="relative w-full ">
                <input
                  type="text"
                  className="h-10 px-3 w-full  bg-white p-7 border-2 border-solid border-[#5333ED] border-opacity-30 h-2 text-[black] rounded-lg peer
                  "
                  id="number-card"
                />
                <label
                  className="bg-[#ffff] peer-focus:text-[#5333ED] duration-500 peer-focus:text-xs peer-focus:-top-2 absolute top-4 left-5 text-[#000] text-opacity-30"
                  for="number-card"
                  htmlFor=""
                >
                  Número de Tarjeta
                </label>
              </div>

              <div className="flex relative justify-between  gap-5   ">
                <div className="relative w-full  ">
                  <input
                    type="text"
                    className="h-10  px-3 peer  bg-white p-7 border-2 border-solid border-[#5333ED] border-opacity-30 h-2  text-[black] rounded-lg "
                    id="vencimiento"
                  />
                  <label
                    for="vencimiento"
                    htmlFor=""
                    className="bg-[#ffff] peer-focus:text-[#5333ED] duration-500 peer-focus:text-xs peer-focus:-top-2 absolute top-4 left-5 text-[#000] text-opacity-30"
                  >
                    Vencimiento
                  </label>
                </div>
                <div className="relative ">
                  <input
                    type="text"
                    className="h-10  px-3 peer bg-white p-7 border-2 border-solid border-[#5333ED] border-opacity-30 h-2  text-[black] rounded-lg "
                    id="CVV"
                  />
                  <label
                    htmlFor=""
                    for="CVV"
                    className="bg-[#ffff] peer-focus:text-[#5333ED] duration-500 peer-focus:text-xs peer-focus:-top-2 absolute top-4 left-5 text-[#000] text-opacity-30 "
                  >
                    CVV
                  </label>
                </div>
              </div>
              <div className="relative flex flex-col">
                <input
                  type="text"
                  className="h-10  bg-white p-7 border-2 border-solid border-[#5333ED] border-opacity-30 h-2  text-[#5333ED] rounded-lg text-lg font-semibold peer  px-3"
                  id="Código Postal"
                />
                <label
                  for="Código Postal"
                  htmlFor=""
                  className="bg-[#ffff] peer-focus:text-[#5333ED] transition duration-500 peer-focus:text-xs peer-focus:-top-2 absolute top-4 left-5 text-[#000] text-opacity-30 "
                >
                  Código Postal
                </label>
              </div>

              <div className=" items-center flex justify-between bg-white p-5 border-2 border-solid border-[#5333ED] border-opacity-30 text-[#5333ED] rounded-lg text-lg font-semibold   px-5">
                <h2>País/Región</h2>
                <i
                  onClick={() => setCountries(true)}
                  className="fa-solid fa-arrow-down"
                ></i>
              </div>
            </form>
            <hr className="h-1 bg-[#5333ED] w-full" />
            <h2 className="text-3xl text-[#202F59] font-bold pb-3">
              Política de cancelación
            </h2>
            <p className="pb-4 text-[#202F59]  text-xl tracking-wider">
              Si cancelas antes de las 15:00hs a una semana de su hospedaje, va
              a obtener un reembolso total de lo que pago. Si cancelas antes de
              las 15:00hs del dia del check in, vas a obtener un Reembolso
              parcial: vas a recibir el 50 % del monto de todas las noches. No
              se reembolsan la primera noche ni la tarifa por servicio.
            </p>
            <hr className="h-1 bg-[#5333ED] w-full" />
            <h2 className="text-3xl text-[#202F59] font-bold pb-3">
              Normas del hospedaje
            </h2>
            <p className="pb-4 text-[#202F59] text-xl tracking-wider">
              Les pedimos a todos los huéspedes que tengan en cuenta algunos
              detalles que hacen que un huésped sea excelente.
              <ul className="list-disc px-5 text-[#202F59] text-xl tracking-wider">
                <li>Seguí normas de la casa.</li>
                <li>
                  Traté el alojamiento de tu anfitrión como si fuera tu casa.
                </li>
              </ul>
            </p>
            <hr className="h-1 bg-[#5333ED] w-full" />
            <button
              onClick={() => setBooked(true)}
              className="py-2 bg-[#5333ED] text-[#ffff] rounded-lg text-2xl font-semibold w-2/5"
            >
              Realizar Reserva
            </button>
          </section>
          <section className="bg-[#ffff] w-2/5 flex flex-col p-5 gap-5 h-1/5 rounded-2xl">
            <div className="flex gap-5">
              <img
                className="bg-gray-200 h-32 w-32 rounded-2xl"
                src={validate.imagen?.[0]}
                alt=""
              />
              <div className="flex flex-col justify-center text-[#202F59]">
                <h2 className="font-semibold text-xl">
                  {validate?.name?.[0].toUpperCase() +
                    validate.name?.substring(1)}
                </h2>
                <h3 className="text-lg">{validate.ubicacion}</h3>
                <h3 className="font-semibold text-lg">
                  {validate.comentarios?.length}
                </h3>
              </div>
            </div>
            <hr className="bg-[#202F59] h-0.5" />
            <div className="flex justify-between  text-[#202F59] text-xl">
              <h2>${validate.precio} por noche</h2>
              <h2>{Math.round(timexweek)}</h2>
            </div>
            <div className="flex justify-between text-[#202F59] text-xl ">
              <h2>Tarifa de servicio</h2>
              <h2>{values.service}</h2>
            </div>
            <div className="flex justify-between  text-[#202F59] text-xl">
              <h2>Tarifa de impuestos</h2>
              <h2>{values.taxes}</h2>
            </div>

            <hr className="bg-[#202F59] h-0.5" />
            <div className="flex justify-between  text-[#202F59] font-bold text-xl">
              <h2>Total</h2>
              <h2>${total}</h2>
            </div>
          </section>
        </section>
      </article>

      <Footer />
      <ModalCountries visible={countries} close={closeCountries} />
      <BookSuccesfull visible={booked} close={closeBooked} />
      
    </main>
  );
};

export default Checkout;
