import PropTypes from "prop-types";
import './Producto.css';




function DetalleProducto(props){
        const handleBackButtonClick = () => {
            window.history.back();
        };
    return(
        <div className="seccion-producto">
            <div className="card-body">
                <h5 className="card-title">Nombre:  {props.nombre}</h5>
                <p className="card-text">Precio: {props.precio}</p>
                <p className="card-text">Stock: {props.stock}</p>
                <p className="card-text">Codigo: {props.codigo}</p>
                
                
                
            </div>
            <button className="btn" onClick={handleBackButtonClick}>Volver</button>
        </div>
    )
}

DetalleProducto.propTypes = {
    nombre: PropTypes.string.isRequired,
    precio: PropTypes.number,
    stock: PropTypes.number,
    codigo: PropTypes.string,

};


export default DetalleProducto;