
const ValidationLogin = (body) =>
{
    let errors = {}

    
        if(!body.usuario)
        {
            errors.usuario = "User is Required! ";
        }
        else if(body.usuario.length < 5)
        {
            errors.usuario = "Must be more than 4 characters"
        }
     
        if(!body.password)
        {
            errors.password = "Password is Required";

        } 
        else if(body.password.length < 5)

        {
            errors.password = "Must be more than 4 characters"; 
        }

        return errors;
   
}

export default ValidationLogin;