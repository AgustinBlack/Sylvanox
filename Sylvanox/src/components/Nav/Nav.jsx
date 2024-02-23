import clases from './Nav.module.css'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className={clases.container}>
            {/* <Link to='/' className={clases.Link}>Inicio</Link> */}
            <Link to='/Jugar' className={clases.link} ><p className={clases.link__p}>Jugar</p></Link>
            <Link to='/Mapa' className={clases.link} ><p className={clases.link__p}>Mapa</p></Link>
            <Link to='/Mazo' className={clases.link} ><p className={clases.link__p}>Mazo</p></Link>
            <Link to='/Tienda' className={clases.link} ><p className={clases.link__p}>Tienda</p></Link>
            <Link to='/Reglas' className={clases.link} ><p className={clases.link__p}>Reglas</p></Link>
        </div>
    )
}

export default Nav