import { Link } from "react-router"
import '../css/Accordion.css'

function PreguntasFrecuentes() {
    return (
        <section className='preguntas-frecuentes my-4'>
            <h1 className='text-dark'>Preguntas frecuentes</h1>
            <div className="accordion container" id="acordion-preguntas-frecuentes">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span>
                                ¿Cómo puedo crear una cuenta de <strong>Market</strong>?
                            </span>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <span>Puedes crear una cuenta ingresando al siguiente <Link to="/crear-cuenta">enlace</Link> y siguiendo las instrucciones.</span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ¿Puedo anular mi compra?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <span>
                                Conforme a lo dispuesto en la ley del consumidor, dispones de <strong>10 días</strong> para anular tu compra sin expresión de causa.
                                Para ello debes devolver los productos adquiridos en perfectas condiciones.
                                Esto no aplica a servicios, productos hechos a medida, productos que puedan deteriorarse rápidamente por su uso o productos que, por su naturaleza, no puedan ser devueltos.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ¿Cómo acumulo puntos MarketGo?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <span>
                                Para acumular puntos <span className="fst-italic">MarketGo</span> solo debes inscribirte al programa de puntos con tus datos.
                                Puedes hacerlo en cualquiera de nuestras sucursales, dirigiéndote a <span className="fst-italic">Servicio al cliente</span>, o a través del siguiente <Link to='/marketgo'>enlace</Link>.<br/>
                                El programa de puntos <span className="fst-italic">MarketGo</span> es gratuito y puedes darte de baja en cualquier momento.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Perdí mi boleta, ¿cómo puedo recuperarla?
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body text-start">
                            <span>
                                Puedes recuperar tu boleta con tu RUT en cualquiera de nuestras sucursales o a través de la página. Solo ingresa a tu cuenta y dirígete al menú 'Mis compras'.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <h2 className='text-dark'>¿No encontraste lo que buscabas?</h2>
                <Link to='/contactanos' className='btn btn-secondary text-white my-2'>Contáctanos</Link>
            </div>


        </section>
    )
}

export default PreguntasFrecuentes