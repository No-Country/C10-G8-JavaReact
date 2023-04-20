import React from "react";
import countries from "../assets/countries";
const ModalCountries = ({ visible, close }) => {
  if (!visible) return null;

  const closeModal = (e) => {
    if (e.target.id === "container") {
      close();
    }
  };
  return (
    <div
      onClick={closeModal}
      id="container"
      className=" bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm"
    >
      <div className=" fixed inset-0 w-2/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-scroll">
        <section className="bg-[#202F59] flex items-center justify-center gap-10 sticky top-0 text-lg text-[#ffff] p-5">
          <i onClick={close} className="fa-solid  fa-x"></i>
          <h2 className="text-xl font-semibold">País/Región</h2>
        </section>
        {countries.map((country) => (
          <div className="px-5 py-2">
            <h2 className="text-2xl text-[#202F59] font-semibold">{country}</h2>
            <hr className="w-4/5 h-0.5 bg-[#5333ED] bg-opacity-30" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalCountries;
