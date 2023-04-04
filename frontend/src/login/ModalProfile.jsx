import React from "react";

const ModalProfile = () =>
{
   return(
            <div  
             className="fixed inset-0 
             bg-white/20 opacity-72  
                flex justify-center
                items-center">
            <div  
            className="fixed justify-center
                items-center
                h screen">
            <div        
            class="bg-gray-300 
                px-10 py-8 
                rounded-xl 
                w-screen 
                shadow-md max-w-sm">
                  <button data-modal-toggle="defaultModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
                 <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
                </button>
            <div       
            class="w-96 p-60 
                shadow-lg 
                bg-white 
                rounded-md
                sm:inline-block
                sm:align-middle" 
                className="sm:my-4 sm:max-w-lg w-full ">
            
            <div  
             className="modal-wrapper
             px-4 pt-5 pb-4 sm:p-4 sm:pb-2 rounded-3xl 
                flex-col bg-gray-400 
                text-1xl text-center
                text-grey-700 lowcase
                bg-gray-400">
               Perfil Creado          
            </div> 
           
            <br></br> 
                <div class="flex flex-wrap justify-center">
                 <div class="w-6/12 sm:w-4/12 px-1">
                    <img src="https://www.shareicon.net/data/256x256/2016/07/26/802029_user_512x512.png" 
                    alt="Imagen de Perfil" 
                    class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                </div>
            <br></br>
            <label className=" 
                px-4 pt-5 pb-4 sm:p-16 sm:pb-2 
                text-center
                flex-col  
                text-1xl 
                text-grey-700 lowcase">
               Subtexto de Bienvenida
          </label> 
          <br></br>
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
              Continuar
              </button>  
        </div>
        </div>
    </div>
</div>
    );
}
export default ModalProfile;