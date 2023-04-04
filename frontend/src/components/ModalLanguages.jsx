import React from "react";
import scroll from '../assets/scroll.svg'

const ModalLanguages = () =>
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
           h-26">
       <div        
       class="bg-stone-400 
           px-10 py-8 
           rounded-t-lg
           w-screen 
           shadow-md max-w-sm">
             <button data-modal-toggle="defaultModal" type="button" class="text-black-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"  >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           <span class="sr-only">Close modal</span>
           </button>
         
     </div>
     <div className="bg-neutral-300">
        <h2 className=" 
                px-0 pt-0 pb-0 sm:p-3 sm:pb-2 
                text-left
                flex-col  
                text-1xl 
                text-black">
              Idiomas que hablo
          </h2> 
          <div class="flex items-center h-5">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5 ">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5
           ">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div><br></br>
             <div class="flex items-center h-5 
             overflow-auto ">
   &nbsp;&nbsp;&nbsp;<input id="remember"
                type="checkbox"
                class="w-4 h-4 
                accent-gray-400" required=""/>
                  <div class="ml-3 text-sm">
                     <label for="remember" 
                     class="text-black
                    text-1xl">
                    Idioma
                    </label>
                 </div>
             </div>
        </div>
        
    </div>
    </div> 
    );
}
export default ModalLanguages;