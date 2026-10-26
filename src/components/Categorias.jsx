import abarrotes from '../assets/img/categorias/abarrotes.jpg'
import bebe from '../assets/img/categorias/bebe.jpg'
import carnespescados from '../assets/img/categorias/carnes_pescados.jpg'
import cocina from '../assets/img/categorias/cocina.jpg'
import electrohogar from '../assets/img/categorias/electrohogar.jpg'
import frutasverduras from '../assets/img/categorias/frutas_verduras.jpg'
import juguetes from '../assets/img/categorias/juguetes.jpg'
import limpieza from '../assets/img/categorias/limpieza.jpg'
import '../css/Categorias.css'

import { Link } from "react-router"

const categorias = [
    {
        nombre : 'Frutas y verduras',
        img : frutasverduras
    },
    {
        nombre : 'Abarrotes',
        img : abarrotes
    },
    {
        nombre : 'Electrohogar',
        img : electrohogar
    },
    {
        nombre : 'Cocina',
        img : cocina
    },
    {
        nombre : 'Carnes y pescados',
        img : carnespescados
    },
    {
        nombre : 'Limpieza',
        img : limpieza
    },
    {
        nombre : 'Mundo bebé',
        img : bebe
    },
    {
        nombre : 'Juguetes',
        img : juguetes
    },

]

function Categorias() {
    return (
        <div>
            <div class="d-flex flex-container row row-cols-1 row-cols-md-3 g-4 mx-4 mb-4">
                {categorias.map((categoria) => (
                    <div class="col">
                        <div class="card categoria-card border-warning border-2 bg-secondary">
                            <img 
                                src={categoria.img} 
                                class="card-img-top" 
                                alt={`Imagen representativa de la categoria ${categoria.img}`}
                            />
                                <div class="card-body">
                                    <h5 class="card-title text-light mb-3">{categoria.nombre}</h5>
                                    <Link to='/' className="btn btn-light">Explorar</Link>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default Categorias