import React from "react";
import logo from '../assets/goandstay- only.png'

const ModalProfile = ({visible, onClose}) =>
{

    const handleOnClose = () =>
    {
        onClose();
    };
    if(!visible) return null;

   return(
    <div className="h-screen w-full fixed left-0 top-0 pt-8 z-[999] flex justify-center items-center bg-black bg-opacity-50"> 
      <div   className=" flex justify-center items-center  rounded-lg"> 
      <div class="fixed justify-center bg-[#202F59] py-0 text-sm text-white rounded-full">
            <div class="bg-[#202F59] text-2xl text-white rounded-t-lg px-3 py-4 w-90 max-w-1xl not-italic">
                            
                           <div className="text-center body-font font-poppins">
                                 Perfil creado  
                           </div>
            </div>
            <div className="bg-[white] rounded-b-lg">
                <br></br>
                <div className="rounded-lg body-font font-poppins space-y-4">  
                <div class="w-4/12 sm:w-11/12 px-20">
                    <img src={logo}
                    alt="Imagen de Perfil" 
                    class="shadow rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                <br></br>
                <br></br>
                <label className="px-4 pt-5 pb-4 sm:p-16 sm:pb-2 text-center flex-col  
                text-base text-[#202F59] font-bold lowcase body-font font-poppins not-italic">
               ¡Gracias por elegirnos para tu <br></br>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;próxima aventura!
        
              </label> 
              <br></br>
              <br></br>
              <br></br>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <button onClick={handleOnClose} type="button" className="text-sm leading-normal body-font font-poppins w-22 h-8 text-white rounded-lg py-2 px-6 bg-[#5333ED]">
                      Aceptar y Continuar
                    </button>
                    <br></br>
                 </div>
            </div>
       </div>
      </div>   
    </div>
    );
}
export default ModalProfile;