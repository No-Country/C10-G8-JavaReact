import React from "react";
import ratingComments from "../assets/Comments";
const Rating = ({ visible, close }) => {
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
      <div className=" fixed inset-0 w-3/5 rounded-2xl h-4/5 m-auto bg-[#ffff]   overflow-y-scroll">
        <section className="bg-[#202F59] sticky top-0 text-lg text-[#ffff] p-5">
          <i onClick={close} className="fa-solid fa-x"></i>
        </section>
        <section className="flex">
          <div className="flex  gap-5 p-8">
            <i className="text-[#EAD201] text-2xl fa-regular fa-star"></i>
            <h3 className="text-[#202F59] font-bold ">
              4,7 - X <br />
              Evaluaciones
            </h3>
          </div>
          <section className="flex flex-col">
            {ratingComments.map((commen) => (
              <div className="flex flex-col justify-center gap-5 p-8">
                <div className="flex gap-5">
                  <div className=" flex justify-center items-center w-14 h-14 rounded-full bg-[#202F59]">
                    <img src={commen.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-[#202F59] font-semibold">
                      {commen.name}
                    </h2>
                    <h3 className="italic text-sm text-[#5333ED] text-opacity-30">
                      {commen.date}
                    </h3>
                  </div>
                </div>

                <div className="text-[#202F59] text-ms">
                  <p className="text-ms leading-8">{commen.comment}</p>
                </div>
              </div>
            ))}
          </section>
        </section>
      </div>
    </div>
  );
};

export default Rating;
