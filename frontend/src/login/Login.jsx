import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 

const Login = ({visible, onClose}) =>
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
    const [btnColor, setBtnColor] = useState('violet-light');
  
    const inputChange= ({target}) =>{
   
        if(body.usuario !== '' && body.password !== '')
        {
            setBtnColor('violet-dark')
        }
        else
        {
            setBtnColor('violet-light')
        }

        const{name, value} = target 
        setBody({
            ...body,
            [name]: value
        })
        
    }

    const onSubmit = () =>
    { 
     console.log(body)
        /*
        axios.post('')//consultamos a la url
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
       
       
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center h-30 rounded-lg"> 
            <div class="fixed justify-center bg-[#202F59] text-sm leading-normal text-white rounded-full">
                    <div class="bg-[#202F59] text-2xl text-white rounded-t-lg px-3 py-3 w-screen max-w-sm not-italic">
                        <button data-modal-toggle="defaultModal" type="button" class="sm:align-middle rounded-lg text-sm p-1.0 ml-auto">
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
                         <form className="rounded-lg body-font font-poppins space-y-4">  
                         <div class="flex flex-col items-center justify-center ">
                            <input type="text" className='rounded-lg p-2 focus:border-blue border-2 border-solid h-9 w-22 text-xl text-black' placeholder="Usuario" value={body.usuario} onChange={inputChange} name='usuario'
                             required>
                            </input>
                         </div>                  
                         <div class="relative w-full flex flex-col items-center justify-center"> 
                            <input type={isPasswordVisible ? "text" : "password"} className='rounded-lg p-2 focus:border-blue border-2 border-solid h-9 w-22 text-xl text-black' placeholder="Contraseña" value={body.password} onChange={inputChange} name='password' required/>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2">
                            <label class="rounded px-14 py-1 text-sm text-blue-700 underline cursor-pointer js-password-label" for="toggle" onClick={Password}>Mostrar</label> 
                            </div>
                            
                         </div>    
                         <p class="px-14 text-[#202F59] underline text-sm body-font font-poppins cursor-pointer">¿Has olvidado tu contraseña?</p> 
                         <br></br>  
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
 
    );
}

export default Login;