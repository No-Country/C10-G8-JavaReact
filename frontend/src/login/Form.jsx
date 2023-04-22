import React, { useState } from "react";
import Register from "./Register";
import ModalProfile from "./ModalProfile";

const Form = () =>
{

    const [formIsSub, setFormIsSub] = useState(false);
 
  
    return
    (
        <div>
            {!formIsSub ?  (
                <Register/> 
            )  :  (
                <ModalProfile />
            )}
        </div>
    );
}

export default Form;