 import React  from "react";
 import { useState} from "react";
 import ModalProfile from './ModalProfile.jsx'

const Register = ({closeModal}) =>
{
   
      const [showModal, setShowModal] = useState(false);

      const handleOnClose = () => setShowModal(false);
      
      const [isPasswordVisible, setIsPasswordVisible] = useState(false);
      
      const Password = () =>
      {
          setIsPasswordVisible((prevState) => !prevState);
      } 
      
      
       return(
         <div className="h-screen w-full fixed left-0 top-0 pt-8 z-[999] flex justify-center items-center bg-black bg-opacity-50">    
               <div className=" flex justify-center items-center    rounded-2xl"> 
                 <div class="fixed justify-center bg-[#202F59] py-0 text-sm text-white   rounded-2xl">
                     <div class="bg-[#202F59] text-2xl text-white   rounded-2xl px-3 py-0 w-90 max-w-1xl not-italic">
                           <button onClick={closeModal} data-modal-toggle="defaultModal" type="button" class="sm:align-middle rounded-lg text-sm p-1.0 ml-auto">
                           <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                           <span class="sr-only">Close modal</span>
                           </button>
                           <div className="text-center body-font font-poppins">
                                 Registro  
                           </div>
                      </div>
                <div className="bg-[white] rounded-b-lg">
                   <form className="rounded-lg body-font font-poppins space-y-4">  
                           <div class="flex flex-col items-center justify-center ">
                                 <div class="p-6 space-y-6 "> 
                                       <div class=" relative group ">
                                             <input type="text" id="nombre" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-96 px-4 text-base peer bg-white outline-none" name='nombre' required/>
                                             <label for="nombre" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Nombre y apellido</label>  
                                       </div>
                                       <div class=" relative group ">
                                             <input type="usuario" id="usuario" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-96 px-4 text-base peer bg-white outline-none" name='usuario' required/>
                                             <label for="usuario" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Usuario</label>                         
                                       </div>
                                       <div class=" relative group ">
                                             <input type="email" id="correo" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-96 px-4 text-base peer bg-white outline-none" name='email' required/>
                                             <label for="correo" class="text-gray-400 transform transition-all absolute bottom-4 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Correo electrónico</label>          
                                       <div className="flex items-start mr-16">  
                                       <p class="text-s px-1 pt-1 pb-2 sm:p-1 sm:pb-0 text-[#B5B5B5] text-xs body-font font-poppins cursor-pointer italic">Te enviaremos las confirmaciones de reserva y los recibos <br></br>
                                       por correo electrónico.</p> 
                                 </div>               
                            </div>
                           <div class=" relative group ">
                                       <input type={isPasswordVisible ? "text" : "password"}  id="password" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-96 px-4 text-base peer bg-white outline-none" name='password' required/>
                                       <label for="password" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Contraseña</label>           
                                 <div class="absolute inset-y-0 right-8 top-1 flex items-center px-2">
                                       <label class="rounded py-1 text-sm text-blue-700 underline cursor-pointer js-password-label" for="toggle" onClick={Password}>Mostrar</label> 
                                 </div>              
                           </div>
                            <div class=" relative group ">
                                       <input type="text" id="fecha" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-96 px-4 text-base peer bg-white outline-none" name='fecha' required/>
                                       <label for="fecha" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Fecha de nacimiento</label>                         
                            </div>
                           <div class="flex items-center justify-between">
                                 <div class="flex items-start">
                                       <div class="flex items-center h-5">
                                        <input id="remember" type="checkbox" class="flex items-center ml-2 w-4 h-4" required/>
                                  </div>
                                  <div class="ml-2 text-xs">
                                       <label for="remember" class="text-[#505050] text-xs not-italic">
                                       Acepto los <label className="underline">Términos y condiciones</label>,los<label className="underline"> Términos de Pago del </label> <br></br>
                                       Servicio y <label className="underline">la Política de comportamiento</label> de Go && Stay- <br></br>
                                       También reconozco la <label className="underline"> Política de privacidad.</label>
                                       </label>
                                  </div>            
                            </div> 
                     </div>
                <br></br>  
                         <div class="flex flex-col items-center justify-center">
                           <button onClick={() => setShowModal(true)} type="button" className="text-sm leading-normal body-font font-poppins w-22 h-8 text-white rounded-lg py-2 px-6 bg-[#C4B5FD]">
                                Aceptar y Continuar
                             </button>
                                <br></br>
                                 </div>
                             </div>
                      </div>  
                 </form>
            </div>
          </div>
        </div>
        <ModalProfile onClose={handleOnClose} visible={showModal} />
      </div>
  );
   
   
} 

export default Register;