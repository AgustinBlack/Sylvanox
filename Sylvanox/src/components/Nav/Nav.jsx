import clases from './Nav.module.css'
import jugar from '../../assets/icons8-jugar-50.png'
import mapa from '../../assets/icons8-mapa-50.png'
import reglas from '../../assets/icons8-reglas-50.png'
import tienda from '../../assets/icons8-tienda-50.png'
import mazo from '../../assets/icons8-carta-de-juego-50.png'
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className={clases.container}>
            {/* <div className={clases.container__menu}> */}
            <input type="checkbox" id='menu' />
            <label htmlFor="menu">Menu</label>
            {/* </div> */}
            <ul className={clases.menu}>
                <li className={clases.li}>
                    <Link to='/Jugar' className={clases.link} >
                        <img src={jugar} alt="" className={clases.link__img} />
                        <span className={clases.link__span}>
                            Jugar
                            
                        </span>
                        <i className={clases.link__i} ></i>
                    </Link>
                </li>
                <li className={clases.li}>
                    <Link to='/Mapa' className={clases.link} >
                        <img src={mapa} alt="" className={clases.link__img} />
                        <span className={clases.link__span}>
                            Mapa
                        </span>
                        <i className={clases.link__i} ></i>
                    </Link>
                </li>
                <li className={clases.li}>
                    <Link to='/Mazo' className={clases.link} >
                        <img src={mazo} alt="" className={clases.link__img} />
                        <span className={clases.link__span}>
                            Mazo
                        </span>
                        <i className={clases.link__i} ></i>
                    </Link>
                </li>
                <li className={clases.li}>
                    <Link to='/Tienda' className={clases.link} >
                        <img src={tienda} alt="" className={clases.link__img} />
                        <span className={clases.link__span}>
                            Tienda
                        </span>
                        <i className={clases.link__i} ></i>
                    </Link>
                </li>
                <li className={clases.li}>
                    <Link to='/Reglas' className={clases.link} >
                        <img src={reglas} alt="" className={clases.link__img} />
                        <span className={clases.link__span}>
                            Reglas
                        </span>
                        <i className={clases.link__i}></i>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav