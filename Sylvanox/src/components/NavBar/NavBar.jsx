import Nav from '../Nav/Nav'
import clases from './NavBar.module.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className={clases.container}>
            {/* <Link to='/' className={clases.link}><h4 className={clases.link__title}>Sylvanox</h4></Link> */}
            <Nav/>
        </div>
    )
}

export default NavBar