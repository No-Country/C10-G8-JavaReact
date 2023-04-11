 import React  from "react";
 import { useState} from "react";
 
const Register = () =>
{
   const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
   const Password = () =>
   {
       setIsPasswordVisible((prevState) => !prevState);
   } 
   
   
    return(
      <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center h-30 rounded-lg"> 
          <div class="fixed justify-center bg-[#202F59] text-sm leading-normal text-white rounded-full">
            <div class="bg-[#202F59] text-2xl text-white rounded-t-lg px-10 py-3 w-screen max-w-2xl not-italic">
                  <button data-modal-toggle="defaultModal" type="button" class="sm:align-middle rounded-lg text-sm p-1.0 ml-auto">
                     <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                     <span class="sr-only">Close modal</span>
                  </button>
                     <div className="text-center body-font font-poppins">
                            Registro  
                     </div>
            </div>
            <div className="bg-[white] rounded-b-lg">
              <br></br>
              <br></br>
                <form className="rounded-lg body-font font-poppins space-y-4 ">  
                <div class="relative w-full flex flex-col items-center justify-center"> 
                    <input type="text" className='rounded-lg p-2 focus:border-blue border-2 border-solid w-96 text-xl text-[#5333ED] not-italic' placeholder="Nombre y apellido" name='nombre' required/>   
               </div>  
               <div class="relative w-full flex flex-col items-center justify-center"> 
                    <input type="text" className='rounded-lg p-2 focus:border-blue border-2 border-solid w-96 text-xl text-[#5333ED] not-italic' placeholder="Usuario" name='usuario' required/>   
               </div> 
               <div class="flex flex-col items-center justify-center ">
                     <input type="email" className='rounded-lg p-2 focus:border-blue border-2 border-solid w-96 text-xl text-[#5333ED] not-italic' placeholder="Correo Electronico" name='correo' required/>
                     <div className="flex items-start mr-16"> 
                      <p class="text-s px-1 pt-1 pb-2 sm:p-1 sm:pb-0 text-[#B5B5B5] text-xs body-font font-poppins cursor-pointer italic">Te enviaremos las confirmaciones de reserva y los recibos <br></br>
                      por correo electrónico.</p> 
                       </div>
               </div>  
               <div class="relative w-full flex flex-col items-center justify-center"> 
                     <input type={isPasswordVisible ? "text" : "password"} className='rounded-lg p-2 focus:border-blue border-2 border-solid w-96 text-xl text-[#5333ED] not-italic' placeholder="Contraseña" name='password' required/>
                     <div class="absolute inset-y-0 right-36 top-1 flex items-center px-2">
                     <label class="rounded py-1 text-sm text-blue-700 underline cursor-pointer js-password-label" for="toggle" onClick={Password}>Mostrar</label> 
                     </div>
                            
               </div>
               <div class="relative w-full flex flex-col items-center justify-center"> 
                    <input type="text" className='rounded-lg p-2 focus:border-blue border-2 border-solid w-96 text-xl text-[#5333ED] not-italic' placeholder="Fecha de nacimiento" name='fecha' required/>   
               </div> 
               <div class="flex items-center justify-between">
                     <div class="flex items-start">
                        <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" class="flex items-center ml-36 leading-tight  w-3 h-3" required/>
                        </div>
                        <div class="ml-1 text-xs">
                           <label for="remember" class="text-[#505050] text-xs not-italic">
                           Acepto los <label className="underline">Términos y condiciones</label>,los<label className="underline"> Términos de Pago del Servicio</label> <br></br>
                           y <label className="underline">la Política de comportamiento</label> de Go && Stay- También reconozco  <br></br>
                           la <label className="underline"> Política de privacidad.</label>
                           </label>
                        </div>            
                     </div> 
               </div>
               <br></br>  
               <div class="flex flex-col items-center justify-center">
                     <button type="button" className="text-sm leading-normal body-font font-poppins w-22 h-8 text-white rounded-lg py-2 px-6 bg-[#C4B5FD]">
                     Aceptar y Continuar
                     </button>
                     <br></br>
                     <br></br>
               </div>
              </form>
            </div>
          </div>
      </div>
 
    );
} 

export default Register;