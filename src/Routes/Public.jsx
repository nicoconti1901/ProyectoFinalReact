import { Route, Routes } from "react-router-dom";
import ListaProductos from "../componentes/Productos/ListaProductos.jsx";
import VerProducto from "../componentes/Productos/VerProducto.jsx";
import Login from "../componentes/Login/Login.jsx";
import Registro from "../componentes/Registro/Registro.jsx";

function Public() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/Ver-producto" element={<VerProducto />} />
        <Route path="/InicioSesion" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default Public;
