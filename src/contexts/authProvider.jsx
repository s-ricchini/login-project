import { AuthContext } from "./authContext"
import { useState } from "react"

import useToken from "../auth/useToken"

function AuthProvider({children}){

    const {token,setToken,removeToken} = useToken()
    
    //estado que tengo que usar para guardar la data que saque del payload del token
    const [user,setUser] = useState()

    const logOut = () => {
        removeToken();
        setUser(null)
    }

    const values = {
        token,setToken,user,isAuthenticated: !!token ,logOut
    }
    return(<AuthContext.Provider value={values}>{children}</AuthContext.Provider>)
}

export default AuthProvider