import React, { useState } from "react";
import perfil from "../assets/logoperfil.svg"
import NavBarOnlyLogo from '../components/NavBarOnlyLogo'; 
import Footer from '../components/Footer'; 
import { Link } from 'react-router-dom'
 
const Profile = () => {

//
//
    return (
 
     <div className='w-screen h-screen bg-[#E9E8E8] overflow-x-hidden '>
        
             <NavBarOnlyLogo />
         <div className='flex flex-col mt-24 min-[540px]:px-18  py-4 ' >
            <br></br>
             <div className='w-screen h-[80vh] bg-[white] px-16 py-8 ' >
                <div className='bg-[white] w-full h-full rounded-3xl p-12 flex flex-row ' >
                        <div className='p-0 flex'>       
                        <button type="button" className="h-36 w-36 flex items-center justify-center rounded-full bg-[#D1D1D6] " >  
                        <img className="h-32 w-26 rounded-full p-1" src={perfil} alt="" />                 
                        </button>
                        <div className="flex flex-col space-y-1 p-6"> 
                            <h1 className="px-5 text-[#202F59] text-3xl font-bold body-font font-poppins not-italic">Susana</h1>
                            <h2 className="px-5 text-xl text-[#5333ED4D] body-font font-poppins italic">Se registro en aaaa</h2>
                            <Link to="/EditForm" className="p-1 px-6 underline underline-offset-8 text-xl text-[#202F59] body-font font-poppins">Editar Perfil</Link>
                            <br></br>   
                              <br></br>    
                                 <div className='p-2 flex'> 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-[blue] bi bi-info-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/> <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/> </svg> &nbsp; &nbsp;
                                     <h2 className=" p-0 text-[#5333ED]  font-bold body-font font-poppins not-italic text-xl underline underline-offset-8">Información</h2>
                                 </div>
                                 <div className='p-2 flex'> 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-[#E2006D] bi bi-heart" viewBox="0 0 16 16"> <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/> </svg>&nbsp; &nbsp;
                                     <h2 className=" p-0 text-[#5333ED] font-bold body-font font-poppins not-italic text-xl  underline underline-offset-8">Favoritos</h2>
                                 </div>
                                 <div className='p-2 flex'> 
                                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="text-[#202F59]" fill="currentColor" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0H24V24H0z"/> <path d="M18 23h-2v-1H8v1H6v-1H5c-1.105 0-2-.895-2-2V7c0-1.105.895-2 2-2h3V3c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h3c1.105 0 2 .895 2 2v13c0 1.105-.895 2-2 2h-1v1zm1-16H5v13h14V7zm-9 2v9H8V9h2zm6 0v9h-2V9h2zm-2-5h-4v1h4V4z"/> </g> </svg> &nbsp; &nbsp;
                                     <h2 className=" p-0 text-[#5333ED] font-bold body-font font-poppins not-italic text-xl underline underline-offset-8">Viajes</h2>
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
export default Profile;