import './authlayout.css'
import Dashboard from './Dashboard';
import Header from './Header'
import Sidebar from './Sidebar';
const AuthLayout=({children})=>{
    return (
        <div className='auth-layout'>
            <div>
            <Header/>
            </div>
            <div className='layout'>
                <Sidebar/>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout;