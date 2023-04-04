 import React from "react";

const Register = () =>
{

  
    return(
        <div className="fixed inset-0 
        bg-white/20 opacity-72  
          flex justify-center items-center">
        <div className="fixed justify-center items-center
           h screen">
            <div class="bg-gray-300 
            px-10 py-8 
            rounded-xl
             w-screen
              shadow-md max-w-sm">
               <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                </button>
             <div class="w-96 p-60 
             shadow-lg 
             bg-white
              rounded-md
               sm:inline-block 
               sm:align-middle" 
               className="sm:my-4 sm:max-w-lg w-full ">
                
             <div className="modal-wrapper px-4 pt-5 pb-4 sm:p-4 sm:pb-2 rounded-3xl 
                flex-col bg-gray-400 
                text-1xl text-center
                 text-grey-700 lowcase
                  bg-gray-400">
                Registro 
               
             </div>
              <br></br>
             <form className="bg-gray-300 mb-2 ">
               <p> 
                 <input
                   type="text"
                   className="block w-full 
                    px-4 py-2 
                    rounded-t-lg
                    mt-1 text-purple-700 
                    bg-white 
                    border focus:border-purple-400
                    focus:ring-purple-300 
                    focus:outline-none 
                    focus:ring focus:ring-opacity-40"
                 placeholder="Nombre y Apellido"
                 />
                </p>
                <p>
               <input
                    type="text"
                    className="block w-full 
                    px-4 py-2 
                    mt-0 text-purple-700 
                    bg-white 
                    border  focus:border-purple-400
                    focus:ring-purple-300 
                    focus:outline-none 
                    focus:ring focus:ring-opacity-40"
                    placeholder="Usuario"
                    />
                  </p>
                 <p>
               <input
                   type="text"
                   className="block w-full  
                   px-4 py-2 
                   mt-0 text-purple-700 
                  bg-white 
                  border  focus:border-purple-400
                  focus:ring-purple-300 
                  focus:outline-none 
                  focus:ring focus:ring-opacity-40"
                  placeholder="Correo Electronico"
                 />
                </p>
             <div class="py-0">
                 <input
                 type="text"
                 className="block w-full 
                 px-4 py-2 
                 mt-0 text-purple-700 
                 rounded-b-lg
                 bg-white 
                 border focus:border-purple-400
                 focus:ring-purple-300 
                 focus:outline-none 
                 focus:ring focus:ring-opacity-40"  
                 placeholder="Contraseña"
                 />   
             </div> 
                <label className="text-sm
                font-light 
                text-gray-500
                dark:text-gray-400
                italic px-2 pt-2 
                pb-2 sm:p-2 sm:pb-2">
                Subtexto dando info
                </label>
               <br></br>
               <input
               type="text"
               className="block w-full 
               px-4 py-2 
               mt-0 text-purple-700 
               rounded-md
              bg-white 
              border focus:border-purple-400
               focus:ring-purple-300 
               focus:outline-none 
               focus:ring focus:ring-opacity-40"  
               placeholder="Fecha de Nacimiento"
             />   
               <label className="text-sm
               font-light 
               text-gray-500
               dark:text-gray-400
               italic px-2 pt-2 
               pb-2 sm:p-2 sm:pb-2">Subtexto dando info</label>
               <br></br>
            <div class="flex items-center justify-between">
            <div class="flex items-start">
            <div class="flex items-center h-5">
               <input id="remember"
                type="checkbox"
                class="w-4 h-4
                 border border-gray-300 
                 rounded bg-gray-50
                 focus:ring-3 focus:ring-primary-300
                 dark:bg-gray-700 dark:border-gray-600 
                 dark:focus:ring-primary-600 
                 dark:ring-offset-gray-800" required=""/>
            </div>
            <div class="ml-3 text-sm">
                <label for="remember" 
                class="text-gray-500
               dark:text-gray-400
               italic">
               Texto sobre términos y condiciones
               </label>
            </div>
           </div> 
          </div>
          <br></br>
              <button type="submit" 
              class="w-full text-black
              bg-gray-400  
              hover:bg-primary-700
              focus:ring-4 focus:outline-none
              focus:ring-primary-300 
              font-medium rounded-lg 
              text-sm px-5 py-2.5 text-center
              dark:bg-primary-600
              dark:hover:bg-primary-700 
              dark:focus:ring-primary-800">
              Aceptar y continuar
              </button>       
        </form> 
       </div>
    </div>
   </div>
</div>
       
    );
} 

export default Register;