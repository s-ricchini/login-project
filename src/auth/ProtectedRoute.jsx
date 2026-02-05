import { Navigate,useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { useContext } from "react";

function ProtectedRoute({children}){

    const {isAuthenticated} = useContext(AuthContext)
    const location = useLocation()

    if(!isAuthenticated){
       return <Navigate to={'/login'} state={{from:location}}></Navigate>
    }

    return children

}

export default ProtectedRoute;