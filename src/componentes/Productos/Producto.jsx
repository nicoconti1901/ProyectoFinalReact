import PropTypes from "prop-types";
import './Producto.css';




function Producto(props){
    const handleButtonClick = () => {
        window.location.href = "Ver-producto";
    };
    return(
        <div className="seccion-producto">
            <div className="card-body">
                <h5 className="card-title"> {props.nombre}</h5>
                
                
            </div>
           <button className="btn" onClick={handleButtonClick}>Ver Mas</button>
        </div>
    )
}

Producto.propTypes = {
    nombre: PropTypes.string.isRequired,
    valores: PropTypes.string,
    animal: PropTypes.string,
    color: PropTypes.string,
    director: PropTypes.string,
    ubicacion: PropTypes.string,

};


export default Producto;