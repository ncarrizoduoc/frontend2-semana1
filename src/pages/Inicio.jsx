import frutas from '../assets/img/frutas.jpg'
import Categorias from '../components/Categorias'
import { Link } from 'react-router'
import '../css/Inicio.css'

function Inicio() {
    return (
        <div>
            <header className="mt-3 mb-5">
                <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 mb-4">
                    <div className='text-start me-3'>
                        <h1>Bienvenido a Market</h1>
                        <p>¡El supermercado más conveniente de Chile!</p>
                    </div>
                    <div className="card border-2 h-100" style={{ maxWidth: "540px" }}>
                        <div className="row g-0 h-100 align-items-stretch">
                            <div className="col-md-4">
                                <img
                                    src={frutas}
                                    className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                                    alt="Imagen de frutas"
                                />
                            </div>

                            <div className="col-md-8">
                                <div className="card-body h-100 d-flex flex-column justify-content-center bg-body-tertiary">
                                    <h2 className="card-title">Conoce nuestro catálogo</h2>
                                    <p className="card-text mb-3">
                                        Trabajamos para ofrecerte los mejores productos del mercado a precios insuperables.
                                    </p>
                                    <Link to="/productos" className="btn btn-secondary">
                                        Explorar productos
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-dark py-4">
                <h2 className="text-white mb-4">
                    Explora productos por categoría
                </h2>
                <Categorias />
            </div>
        </div>
    )

}

export default Inicio