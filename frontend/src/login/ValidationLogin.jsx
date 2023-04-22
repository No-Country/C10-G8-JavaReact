
const ValidationLogin = (body) =>
{
    let errors = {}
    
    
        if(!body.nombreUsuario)
        {
            errors.nombreUsuario = "User is Required! ";
        }
        else if(body.nombreUsuario.length < 5)
        {
            errors.nombreUsuario = "Must be more than 4 characters"
        }
     
        if(!body.password)
        {
            errors.password = "Password is Required";

        } 
        else if(body.password.length < 4)

        {
            errors.password = "Must be more than 3 characters"; 
        }

        return errors;
   
}

export default ValidationLogin;