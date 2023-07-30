import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext=createContext({})



export const AuthContextProvider=({children})=>{
    const [isUserAuthenticated,setIsUserAuthenticated]=useState(false)
    const authentication=()=>{
      
            setIsUserAuthenticated(true)
            
    }
    const logout=()=>{
        setIsUserAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isUserAuthenticated,authentication,logout}}>
            {children}
        </AuthContext.Provider>
    )
}