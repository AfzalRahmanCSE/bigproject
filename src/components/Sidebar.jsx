import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar=()=>{
    return (
        <div className='sections'>
           
           <Link to='section1' className='section-links'>Section1</Link>
           <Link to='section2' className='section-links'>Section2</Link>
           <Link to='section3' className='section-links'>Section3</Link>
        </div>
    )
}

export default Sidebar;