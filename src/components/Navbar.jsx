import { Link } from "react-router"
import { useState } from "react";

function Navbar() {

    const[isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Market
                </Link>
                <button 
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link active" aria-current="page">
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/nuestras-tiendas' className="nav-link">
                                Nuestras tiendas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/quienes-somos' className="nav-link">
                                Quiénes somos
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar