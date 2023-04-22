

import{
    LOGIN_REQUEST,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS

} from '../constants/userConstants'

export const authReducer = (state = { nombreUsuario : {} }, action) => 
{

        switch(action.type)
        {
           case LOGIN_REQUEST:
            case REGISTER_USER_REQUEST:
           
            return{
                loading:true,
                isAuthenticated:false,

            }

            case LOGIN_SUCESS:
                case REGISTER_USER_SUCESS:
              
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:true,
                    nombreUsuario:action.payload
                }

             

            case LOGIN_FAIL:
            case REGISTER_USER_FAIL:
                return{
                    ...state,
                    loading:false,
                    isAuthenticated:false,
                    nombreUsuario:null,
                    error:action.payload
                }

            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null 

                }
             
            default:
                return state
        }
}
 
