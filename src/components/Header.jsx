import Home from './Home'
import './header.css'
import { Link } from 'react-router-dom'
import About from './About'
import { ThemeContext} from '../context/ThemeContext'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Header=()=>{
    const ThemeApply=useContext(ThemeContext)
    const AuthCon=useContext(AuthContext)

    const onSave=()=>{
        ThemeApply.updateTheme()
    }
    const onLogout=()=>{
        AuthCon.logout()
    }
  
    return (
        <div className='header'>
            <Link  className='link' to='/home'>Home</Link>
            <Link  className='link' to='/about'>About Us</Link>
            <Link className='link'  to='/contact'>Contact Us</Link>
            <button className='link' onClick={onSave}>Change Theme</button>
            <button className='link' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Header