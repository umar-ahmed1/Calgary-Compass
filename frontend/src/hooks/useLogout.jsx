import { useAuthContext} from "./useAuthContext"
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const navigate = useNavigate()
    const {dispatch} = useAuthContext()

    //function to logout the user
    const logout = async () => {
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
        navigate('/');
    }
    //return function
    return {logout}

}