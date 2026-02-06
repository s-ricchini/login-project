import { useState } from "react";

export default function useToken(){
    
    const getToken = () => {
        const tokenString = sessionStorage.getItem('token');
        
        if(!tokenString){
            return null;
        }

        return JSON.parse(tokenString);
    }
    
    const [token,setToken] = useState(getToken())

    const saveToken = (userToken) => {
        setToken(userToken);
        sessionStorage.setItem('token', JSON.stringify(userToken))
    };
    
    const removeToken = () => {
        sessionStorage.removeItem('token');
        setToken(null)
    }
    
    return {
        setToken: saveToken,
        removeToken: removeToken,
        token
    }

}