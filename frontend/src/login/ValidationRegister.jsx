const ValidationRegister = (body) =>

{
    let errors = {} 

    if(!body.nombre)
    {
        errors.nombre = "Full Name is Required! ";
    } 
     
    else if(!/^[A-Za-z]{4,20}/.test(body.nombre))
    {
        errors.nombre = "Should be 4 to 20 characters and no special character";
    }

    if(!body.nombreUsuario)
    {
        errors.nombreUsuario = "User is Required! ";
    } 
     
    else if(!/^[A-Za-z0-9]{4,20}/.test(body.nombreUsuario))
    {
        errors.nombreUsuario = "Should be 4 to 10 characters and no special character";
    }
    if(!body.email)
    {
        errors.email = "Email is Required! ";
    } 
     
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email))
    {
        errors.email = "It should be a valid email address";
    }
    if(!body.password)
    {
        errors.password = "Password is Required! ";
    } 
     
    else if(!/^[A-Za-z0-9]{3,20}/.test(body.password))
    {
        errors.password = "Should be 3 to 10 characters and no special character";
    }
    if(!body.password)
    {
        errors.password = "Password is Required! ";
    } 
     
    else if(!/^[A-Za-z0-9]{3,20}/.test(body.password))
    {
        errors.password = "Should be 3 to 10 characters and no special character";
    }
    if(!body.fechaNacimiento)
    {
        errors.fechaNacimiento = "Date is Required! ";
    } 
    else if(!/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(body.fechaNacimiento))
    {
        errors.fechaNacimiento = "Date of Birth must be a valid date in the format DD-MM-YYYY";
    }
    if(!body.Ischecked)
    {
        errors.Ischecked = "Please accept terms and conditions" ;
    }
     
    return errors;
}

export default ValidationRegister;