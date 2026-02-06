import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Link } from "react-router-dom";

//muestra boton de log in o logOut depoendiendo si el usuario esta autentificado
function BotonLoginOut(){
    
    const {isAuthenticated,logOut} = useContext(AuthContext);

    
    if(isAuthenticated){
        return(
            <button className="bg-red-500 px-4 py-2 rounded-full hover:bg-red-700 hover:cursor-pointer" onClick={() => {
                console.log('logOut')
                logOut()
            }}>LogOut</button>
        )
    }
        
    return(
        <Link to={'/login'}>
            <button className="outline-2 outline-white px-4 py-2 rounded-full hover:bg-white hover:outline-0 hover:cursor-pointer hover:text-blue-950">LogIn</button>
        </Link>
        
    )
}

export default BotonLoginOut