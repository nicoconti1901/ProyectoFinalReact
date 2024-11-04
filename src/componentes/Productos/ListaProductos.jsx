import Producto from './Producto';
import productos from '../../database/productos';

function ListaProductos(){
    return(
        <div>
        {productos.map((producto, index) => (
            <Producto
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
export default ListaProductos;
    