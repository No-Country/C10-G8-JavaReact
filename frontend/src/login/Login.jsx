import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 

const Login = ({visible, onClose,closeModal}) =>
{
  
 //Boton Login
/*
    const handleClose = () =>
    {
      onClose()
    };
    if(!visible) return null;
*/

const[body, setBody] = useState({usuario: '', password: ''})
const [btnColor, setBtnColor] = useState('[#C4B5FD]');

const inputChange= ({target}) =>{

    if(body.usuario !== '' && body.password !== '')
    {
        setBtnColor('[#5333ED]')
    }
    else
    {
        setBtnColor('[#C4B5FD]')
    }

    const{name, value} = target 
    setBody({
        ...body,
        [name]: value
    })
    
}

const onSubmit = () =>
{ 
 //console.log(body)
   /*
    axios.post('https://goandstay-production.up.railway.app/usuario/traer', body)//consultamos a la url
    .then(({data}) =>{
        console.log(data)
    })
    .catch(({response}) =>{
        console.log(response.data);
    })
    */
}


const [isPasswordVisible, setIsPasswordVisible] = useState(false);

const Password = () =>
{
    setIsPasswordVisible((prevState) => !prevState);
} 
  

return( 
   
   <div className="h-screen w-full fixed left-0 top-0 z-[999] flex justify-center items-center bg-black bg-opacity-50"> 
    <div className="bottom-80 h-90 flex justify-center items-center rounded-lg"> 
        <div class="fixed justify-center bg-[#202F59] text-sm leading-normal text-white rounded-full">
                <div class="bg-[#202F59] text-2xl text-white rounded-t-lg px-3 py-3 w-screen max-w-sm not-italic">
                    <button onClick={closeModal} data-modal-toggle="defaultModal" type="button" class="sm:align-middle rounded-lg text-sm p-1.0 ml-auto">
                        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div className="sm:inline px-20 body-font font-poppins">
                        Iniciar sesión  
                    </div>
                    
                </div>
                <div className="bg-[white] rounded-b-lg">
                    <br></br>
                 
                     <p className="text-[#202F59] p-3 body-font font-poppins text-xl">¡Bienvenido de vuelta!</p>
                    <p></p>
                    <p></p>
                     <form className="rounded-lg body-font font-poppins ">  
                     <div class="flex flex-col items-center justify-center ">
                        <div class="p-6 space-y-6">
                                <div class="w-56 relative group ">
                                    <input type="text" id="usuario" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-22 px-4 text-base peer bg-white outline-none" value={body.usuario} onChange={inputChange} name='usuario' required/>
                                    <label for="usuario" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Usuario</label>
                                </div>
                                <div class="w-56 relative group">
                                    <input type={isPasswordVisible ? "text" : "password"} id="password" class="text-black rounded-lg p-2 focus:border-blue border-2 border-solid h-10 w-22 px-4 text-base peer bg-white outline-none" placeholder="" value={body.password} onChange={inputChange} name='password' required/>
                                    <label for="password" class="text-gray-400 transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">Contraseña</label>
                                    <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                                    <label class="rounded px-30 text-xs text-blue-700 underline cursor-pointer js-password-label" for="toggle" onClick={Password}>Mostrar</label>
                                    </div>
                                </div>
                                <div class="w-56 relative group">
                                <p class="px-0 text-[#202F59] underline text-sm body-font font-poppins cursor-pointer">¿Has olvidado tu contraseña?</p> 
                                </div>
                        </div>
                     </div>    
                     
                     <div class="flex flex-col items-center justify-center">
                        <button type="button" onClick={onSubmit} className={`text-sm leading-normal body-font font-poppins w-22 h-8 text-white rounded-lg py-2 px-6 bg-${btnColor}`}> 
                            Ingresar
                        </button>
                        <br></br>
                    </div>   
                     </form>
                </div>
        </div>
   </div> 
   </div>
);
}

export default Login;