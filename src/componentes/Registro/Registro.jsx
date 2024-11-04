import './Registro.css';

function Registro() {
  return (
    //formulario de registro
    <div className="formRegistro">
      <h1>Registro</h1>
      <form>
        <label>Nombre</label>
        <input type="text" placeholder="Nombre" />
        <label>Apellido</label>
        <input type="text" placeholder="Apellido" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Contraseña</label>
        <input type="password" placeholder="Contraseña" />
        <button>Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
