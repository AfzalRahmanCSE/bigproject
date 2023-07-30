import { AuthContext } from "../context/AuthContext"
import Login from "./Login"
import { useContext } from "react"
import Dashboard from "./Dashboard"
import { Routes, Route } from "react-router-dom"

import AuthLayout from "./AuthLayout"
import PageNotFound from "./PageNotFound"
import Home from "./Home"
import { ThemeContext } from "../context/ThemeContext"
import About from "./About"
import Contact from "./Contact"

const Main = () => {
    const ThemeApply=useContext(ThemeContext)
    const AuthVariable = useContext(AuthContext)
    
    return (
        // <Routes>
        //     <Route path='/' element={<Login/>}/>
        //     <Route path='/dashboard' element={<Dashboard/>}/>
        // </Routes>
        

        <div style={{backgroundColor:ThemeApply.theme.background, color:ThemeApply.theme.color}}>
            {!AuthVariable.isUserAuthenticated ?
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/*' element={<Login />} />
                </Routes>
                :
                <AuthLayout>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/section1' element={<Home />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </AuthLayout>
            }
        </div>
    )
}

export default Main