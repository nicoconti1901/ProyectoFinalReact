
import './Producto.css';
import DetalleProducto from './DetalleProducto';
import productos from '../../database/productos';

function VerProducto(){
    
    return(
        <div>
        {productos.map((producto, index) => (
            <DetalleProducto
                key={index}
                nombre={producto.nombre}
                precio={producto.precio}
                stock={producto.stock}
                codigo={producto.codigo}
                
            />
            ))}
        </div>
    )
}
    


export default VerProducto;