import { AuthContext } from '../context/AuthContext'
import './login.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const Login=()=>{
    const navigate=useNavigate()
    const authValue=useContext(AuthContext)
    const onSave=()=>{
    
       authValue.authentication()
         navigate('/home')
    }

    return(
        <div>
            <h1 className="login">Login Page</h1>
            <hr/>
            <div>
                <label htmlFor="username">Username: </label>
                <input id="username"/>
            </div>
            <div>
                <label htmlFor="password">Password :  </label>
                <input id="password"/>
            </div>
            <button onClick={onSave}>Submit</button>
        </div>
    )

}

export default Login