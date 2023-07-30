import { createContext, useState } from "react";

export const ThemeContext=createContext({})

export const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState({background:'white',color:'black'})
    const updateTheme = () => {
        console.log(theme.background)
        if(theme.background==='white'){
           setTheme({background:'black',color:'white'})
        }else{
            setTheme({background:'white',color:'black'})
        }
    }
   return (

       <ThemeContext.Provider value={{theme,updateTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}







