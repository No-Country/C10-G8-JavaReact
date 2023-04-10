import React from "react";
import NavBar from './NavBar'; 
import perfil from "../assets/logoperfil.svg"
import Footer from './Footer'; 
import info from "../assets/info.svg"
import plus from "../assets/plus.svg"
import heart from "../assets/heart.svg"
import suitcase from "../assets/suitcase.svg"


const EditForm = () =>

{
     return(

        <div className='w-screen h-screen bg-[#E9E8E8] overflow-x-hidden'>
        <NavBar />
    <div className='flex flex-col mt-24 min-[540px]:px-18 py-4' >
       <br></br>
        <div className='w-screen h-[120vh] bg-[#ADADAD] px-16 py-2' >
           <div className='bg-[#E9E8E8] w-full h-full rounded-3xl p-12 flex flex-row ' >
                   <div className='p-0 flex'>       
                   <button type="button" className="h-36 w-36 flex items-center justify-center rounded-full bg-[#D1D1D6] ">  
                   <img className="h-32 w-26 rounded-full p-1" src={perfil} alt="" />                 
                   </button>
                   <div className="flex flex-col space-y-1 p-6"> 
                       <h1 className="px-5 text-black text-xl">Susana</h1>
                       <h2 className="px-5 text-lg text-gray-500 dark:text-gray-500 italic">Se registro en aaaa</h2>
                       <a href="" className="p-1 px-6 underline">Editar Perfil</a> 
                       <br></br>   
                         <br></br>    
                         <div className="p-2 flex"> 
                                     <img className="h-8" src={info} /> &nbsp; &nbsp;
                                     <h2 className="p-1 text-black text-xl underline">Información</h2><br></br>
                                
                         </div>
                         <div className="flex-col py-2 p-14"> 
                                        <h4 className="p-0 text-black text-lg">Información</h4>
                                        <textarea
                                        className="w-full rounded-lg border-1 bg-[#D1D1D6] 
                                        py-[0.92rem] px-32 leading-[1.9]
                                         outline-none transition-all
                                         duration-200 ease-linear"></textarea>
                                     </div>
                                     <div className="flex-col py-2 p-14"> 
                                        <h4 className="p-0 text-black text-lg">Ubicación</h4>
                                        <textarea
                                        className="w-full rounded-lg border-1 bg-[#D1D1D6] 
                                        py-[0.10rem] px-32 leading-[1.9]
                                         outline-none transition-all
                                         duration-200 ease-linear"></textarea>
                                     </div>
                                     <div className="flex py-2 p-14"> 
                                        <h4 className="p-1 py-0 text-black text-lg">Idiomas</h4>&nbsp;
                                     <a href=""><img className="h-8 w-4 py-1" src={plus} /></a> <br></br><br></br>   
                                     
                                     </div>
                                    
                                    <div class=" flex items-center justify-center" role="group">
                                        <button type="button" class=" py-2 w-20 text-sm font-medium text-black border border-gray-200 rounded-lg bg-[#D1D1D6]">
                                            Cancelar
                                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button type="button" class="py-2 w-20 text-sm font-medium text-black border border-gray-200 rounded-lg bg-[#ADADAD]">
                                            Guardar
                                        </button> 
                                        
                                     </div>
                                     <br></br> 
                                     <div className='p-2 flex'> 
                                        <img className="h-8" src={heart} /> &nbsp; &nbsp;
                                        <h2 className=" p-1 text-black text-xl underline">X Favoritos</h2>
                                     </div>
                                     <div className='p-2 flex'> 
                                        <img className="h-8" src={suitcase} /> &nbsp; &nbsp;
                                        <h2 className=" p-1 text-black text-xl underline">X Viajes</h2>
                                      </div>
                                    </div>
                                  
                         </div>
                       
                  </div> 
          
                </div> 
        <Footer />
   </div>
</div>
     );
}

export default EditForm;