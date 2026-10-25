import instagramLogo from "../assets/img/instagram-logo-facebook-2-svgrepo-com.svg";
import twitterLogo from "../assets/img/twitter-154-svgrepo-com.svg";
import facebookLogo from "../assets/img/facebook-svgrepo-com.svg";
import { Link } from "react-router";

function Footer() {
    return (
        <footer className='bg-body-tertiary my-0 p-4 fw-light'>
            <div className='container-fluid text-start'>
                <div className='row row-cols-1 row-cols-sm-2 row-cols-md-4 footer-sections'>
                    <section className='col'>
                        <h4>Datos de contacto</h4>
                        <div>
                            <p>Teléfono: 999999999</p>
                            <p>Correo: contacto@market.cl</p>
                        </div>
                    </section>
                    <section className='col'>
                        <h4>Horario de atención</h4>
                        <div>
                            <p>Lun a dom: 09:00 a 21:00</p>
                        </div>
                    </section>
                    <section className='col'>
                        <h4>Nuestras tiendas</h4>
                        <Link to="/" className="btn btn-dark">
                            Ver ubicaciones
                        </Link>
                    </section>
                    <section className="col">
                        <h4>Nuestras redes sociales</h4>
                        <ul className="list-unstyled d-flex flex-row align-items-center w-100 mb-0 gap-3">
                            <li>
                                <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
                                    <img
                                        src={instagramLogo}
                                        alt="Instagram"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com" target="_blank" aria-label="Twitter">
                                    <img
                                        src={twitterLogo}
                                        alt="Twitter"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
                                    <img
                                        src={facebookLogo}
                                        alt="Facebook"
                                        width="24"
                                        height="24"
                                    />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <p className='fst-italic mt-3'>@Market. Todos los derechos reservados</p>
            </div>
        </footer>

    )
}

export default Footer