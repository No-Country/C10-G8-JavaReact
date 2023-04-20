import React from "react";
import bookImage from '../assets/book-sucessfull.svg'

const BookSuccesfull = ({visible, close}) => {
    if (!visible) return null
    const closeModal = (e)=>{
        if(e.target.id === 'container'){
            close()
        }
    }
  return (
    <div
     onClick={closeModal}
      id="container"
      className=" bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm"
    >
      <div className=" fixed inset-0 w-2/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-scroll">
        <section className="bg-[#202F59] flex items-center justify-center gap-10 sticky top-0 text-lg text-[#ffff] p-5">
          <i onClick={close} className="fa-solid  fa-x"></i>
          <h2 className="text-xl font-semibold">Reserva Completada</h2>
        </section>
        <section className="flex flex-col  gap-8 items-center justify-center">
            <img className="w-1/2 pt-10" src={bookImage } alt="" />
            <h2 className="text-2xl">¡Felicitaciones, su reserva está confirmada!</h2>
            <button onClick={close} className="py-2 bg-[#5333ED] text-[#ffff] rounded-lg text-xl font-semibold w-1/5">Volver</button>

        </section>
      </div>
    </div>
  );
};

export default BookSuccesfull;
