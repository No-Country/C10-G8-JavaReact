 
 
 import axios from "axios"
 import{
    LOGIN_REQUEST,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants'

//Login

 export const login = (body) => async (dispatch) =>
 {
    
    try{
        dispatch({ type: LOGIN_REQUEST})

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('https://c10-g8-javareact-production-740a.up.railway.app/auth/login',body,config)

        dispatch({
            type: LOGIN_SUCESS,
            payload: data.nombreUsuario
        })
    } catch(error)
    {
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
 }

 //REGISTER

 export const register = (body) => async (dispatch) =>
 {
    
    try{
        dispatch({ type: REGISTER_USER_REQUEST})

        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post('https://c10-g8-javareact-production-740a.up.railway.app/auth/nuevo',body,config)
    
        dispatch({
            type: REGISTER_USER_SUCESS,
            payload: data.nombreUsuario
        })
    } catch(error)
    {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload: error.response.data.message
        })
    }
 }
 
 export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:CLEAR_ERRORS
    })
 }

 
  