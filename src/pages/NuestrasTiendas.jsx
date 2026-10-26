import sucursalVespucio from "../assets/img/sucursales/vespucio.jpg";
import sucursalPajaritos from "../assets/img/sucursales/pajaritos.jpg";
import sucursalPuente from "../assets/img/sucursales/puente_alto.jpg";
import sucursalLosLeones from "../assets/img/sucursales/los_leones.jpg";


const tiendas = [
    {
        nombre: "Sucursal Vespucio",
        direccion: "Av. Américo Vespucio 576 - Las Condes",
        img: sucursalVespucio,
        nota : 'Delivery disponible las 24 hrs.'
    },
    {
        nombre: 'Sucursal Pajaritos',
        direccion: 'Av. Pajaritos 3310 - Maipú',
        img: sucursalPajaritos,
        nota: 'Sin servicio Delivery'
    },
    {
        nombre: 'Sucursal Puente Alto',
        direccion: 'Av. Santo Domingo 89 - Puente Alto',
        img: sucursalPuente,
        nota : 'Delivery disponible las 24 hrs.'
    },
    {
        nombre: 'Sucursal Los Leones',
        direccion: 'Av. Los Leones 2523 - Providencia',
        img: sucursalLosLeones,
        nota: 'Delivery disponible de 10:00 a 21:00 hrs.'
    }

]

function NuestrasTiendas() {
    return (
        <section className='nuestras-tiendas'>
            <h1 className='text-dark'>Nuestras tiendas</h1>
            <div className='tiendas-cards'>
                <div className="row row-cols-1 row-cols-md-2 g-4 m-4">
                    {tiendas.map((tienda) => (
                        <div className="col">
                            <div className="card border-2 border-dark">
                                <img 
                                    src={tienda.img} 
                                    className="card-img-top" 
                                    alt={`Imagen del interior de la sucursal ${tienda.nombre}`} 
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{tienda.nombre}</h5>
                                    <p className="card-text mb-3">{tienda.direccion}</p>
                                    <button className='btn btn-secondary text-white'>Cómo llegar</button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">{tienda.nota}</small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NuestrasTiendas