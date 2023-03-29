import React, {useState} from "react";

 

export default function Login  ({visible})
{

  
    return(
        <div className="fixed inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex justify-center items-center">
       <div className="fixed justify-center items-center
        h screen">
        <div class="w-96 p-60 shadow-lg bg-white rounded-md
         sm:inline-block sm:align-middle" className="sm:my-4 sm:max-w-lg w-full ">
        <div className="modal-wrapper px-4 pt-5 pb-4 sm:p-4 sm:pb-2 rounded-3xl 
        flex-col bg-gray-400 
        text-1xl text-center
         text-grey-700 lowcase
          bg-gray-400">
           Registro
        </div>
        <div className="mb-2 rounded-3xl ">
        <input
            type="text"
            className="block w-full 
            px-4 py-2 
            mt-2 text-purple-700 
            bg-white 
            border rounded-3xl  focus:border-purple-400
             focus:ring-purple-300 
             focus:outline-none 
             focus:ring focus:ring-opacity-40"
             placeholder="Nombre y Apellido"
            />
              <input
            type="text"
            className="block w-full 
            px-4 py-2 
            mt-2 text-purple-700 
            bg-white 
            border rounded-3xl focus:border-purple-400
             focus:ring-purple-300 
             focus:outline-none 
             focus:ring focus:ring-opacity-40"
             placeholder="Usuario"
            />
            <input
            type="text"
            className="block w-full 
            px-4 py-2 
            mt-2 text-purple-700 
            bg-white 
            border rounded-3xl focus:border-purple-400
             focus:ring-purple-300 
             focus:outline-none 
             focus:ring focus:ring-opacity-40"
             placeholder="Correo Electronico"
            />
              <input
            type="text"
            className="block w-full 
            px-4 py-2 
            mt-2 text-purple-700 
            bg-white 
            border rounded-3xl focus:border-purple-400
             focus:ring-purple-300 
             focus:outline-none 
             focus:ring focus:ring-opacity-40"
             placeholder="Contraseña"
            />
            </div>
        </div>
       </div>
        </div>
       
    );
} 