import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const Navbar =()=>{

    const {sumaCantidad}= useContext(CartContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-light style-nav">
            <div className="container-fluid">
                <div className="box-logo">
                    <Link className="link-nab-log" to="/">Phone Store</Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="link-nab" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link-nab" to="/category/10">Iphone</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link-nab" to="/category/15">Samsung</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link-nab" to="/category/5">Otros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="link-nab" to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <div className="container-carrito">
                        <Link to="/carrito"><BsCart3 className="icons"/></Link>
                        <p hidden={sumaCantidad()===0} className="icono-cart-cantidad">{sumaCantidad()}</p>
                    </div>
                </div> 
            </div>
        </nav>
    );
}
export default Navbar;