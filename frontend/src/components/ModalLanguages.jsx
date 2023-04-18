import React, { useState } from "react";
import EditForm from "../pages/EditForm";
 

const ModalLanguages = ({visible, onClose}) =>
{
   const handleOnClose = () =>
   {
       onClose();
   };
   if(!visible) return null;
      
   const [selectLang, setSelectLang] = useState([]);

   const [idioma, setIdioma] = useState([]);

  const handleChange = e => {
    setIdioma(e.target.value);
  };

  const chooseLang = () => {
    setSelectLang(prevState => [...prevState, idioma]);
  };
 
    return(
      <div className="h-screen w-full fixed left-0 top-0 pt-8 z-[999] flex justify-center items-center bg-black bg-opacity-50">    
        <div className="flex justify-center items-center  rounded-2xl">
        <div class="fixed justify-center bg-[#202F59] py-0 text-sm text-white rounded-2xl">
            <div class="bg-[#202F59] text-lg text-white rounded-2xl px-3 py-3 w-90 max-w-1xl not-italic">
                <button onClick={handleOnClose} data-modal-toggle="defaultModal" type="button" class="sm:align-middle rounded-lg text-sm p-0 ml-auto">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="none" stroke="#0a0a0a" stroke-width="3" stroke-linejoin="round"/><path d="M29.6569 18.3431L18.3432 29.6568" stroke="#0a0a0a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.3432 18.3431L29.6569 29.6568" stroke="#0a0a0a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                   
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Idiomas que hablo
                                
            </div>
            --
  <div className="bg-[white] rounded-b-lg">
                <form className="rounded-lg body-font font-poppins space-y-4">  
                  
                  <ul class="py-4 divide-y divide-[#d1c4e9]" aria-labelledby="states-button "id="type-value">
                      <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">                       
                        <option value="Ingles" onClick={handleChange} type="text" className="font-bold"> Ingles </option> 
  
                       </button> 
                       </div>
                     </li> 
                     
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                        <option value="Español"  onClick={handleChange}  type="text" className="font-bold">Español</option>         
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button  onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                        <option  value="Alemán"  onClick={handleChange}  type="text" className="font-bold">Alemán</option>                
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button  onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                        <option value="Portugués"  onClick={handleChange}  type="text" className="font-bold">Portugués </option>            
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button  onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                        <option  value="Italiano"  onClick={handleChange}  type="text" className="font-bold">Italiano </option>  
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                        <option  value="Francés" onClick={handleChange}  type="text" className="font-bold">Francés</option>         
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                         <option value="Japonés" onClick={handleChange}  type="text" className="font-bold">Japonés </option>         
                       </button> 
                       </div>
                     </li>  
                     <li>
                      <div class="grid max-w-sm grid-cols-2 mx-auto text-center divide-y divide-blue-200">
                        <button onClick={chooseLang} type="button" class=" inline-flex rounded-lg w-64 px-4 py-2 text-sm body-font font-poppins font-semibold not-italic text-[#202F59] hover:bg-[#d1c4e9] dark:hover:bg-[#d1c4e9] dark:hover:text-[#202F59]">
                      <option value="Coreano" onClick={handleChange}  type="text" className="font-bold"> Coreano </option>          
                       </button> 
                       </div>
                     </li>  
                  </ul> 
                </form>   
                           
               </div>
          </div>
           <div >
            
              <EditForm lang={selectLang} />
            
          </div>  
        </div>
        
      </div>
       
    );
   
}
export default ModalLanguages;