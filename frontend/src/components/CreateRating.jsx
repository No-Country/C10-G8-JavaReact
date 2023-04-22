import React from "react";
import { useState } from "react";
import SuccessfullQualification from "./SuccessfullQualification";

const CreateRating = ({ visible, close }) => {
  if (!visible) return null;
  const closeModal = (e) => {
    if (e.target.id === "container") {
      close();
    }
  };
  const [isCalify, setIsCalify] = useState(false);

  const [visibleCheck, setVisibleCheck] = useState(false);
  const closeCheck = () => {
    setVisibleCheck(false);
  };

 

  return (
    <div
      onClick={closeModal}
      id="container"
      className=" bg-black fixed inset-0 bg-opacity-20 backdrop-blur-sm"
    >
      <div className=" fixed inset-0 w-2/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-hidden">
        <section className="bg-[#202F59] sticky top-0 text-lg text-[#ffff] p-5">
          <i onClick={close} className="fa-solid fa-x"></i>
        </section>
        <section className="p-10 flex flex-col gap-12">
          <div>
            <h2 className="text-[#202F59] py-4 text-2xl">Descripción</h2>
            <textarea
              type="context"
              placeholder="Máximo 100 palabras"
              className="m-2 border-2 rounded-lg w-full p-2 h-24 border-[#202F59]"
            />
            <h2 className="text-[#202F59] py-4 text-2xl">
              ¿Cuántas estrellas le dejarías?
            </h2>
            <div className="flex gap-5 text-3xl">
              <i
                onClick={() => setIsCalify(!isCalify)}
                className={`text-[#EAD201] fa-regular fa-star ${
                  isCalify ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <i
                onClick={() => setIsCalify(!isCalify)}
                className={`text-[#EAD201] fa-regular fa-star ${
                  isCalify ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <i
                onClick={() => setIsCalify(!isCalify)}
                className={`text-[#EAD201] fa-regular fa-star ${
                  isCalify ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <i
                onClick={() => setIsCalify(!isCalify)}
                className={`text-[#EAD201] fa-regular fa-star ${
                  isCalify ? "fa-solid" : "fa-regular"
                }`}
              ></i>
              <i
                onClick={() => setIsCalify(!isCalify)}
                className={`text-[#EAD201] fa-regular fa-star ${
                  isCalify ? "fa-solid" : "fa-regular"
                }`}
              ></i>
            </div>
          </div>
          <section className="flex justify-end gap-5">
            <button
              onClick={close}
              className="text-[#505050] border-b-2 border-[#505050]"
            >
              Cancelar
            </button>
            <button onClick={()=>setVisibleCheck(true)} className="bg-[#5333ED] p-2 px-8 rounded-lg text-[#ffff]">
              Publicar
            </button>
          </section>
        </section>
      </div>
      <SuccessfullQualification visible={visibleCheck} closeModal={close} close={closeCheck} />
    </div>
  );
};

export default CreateRating;
