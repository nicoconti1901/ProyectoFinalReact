import './Login.css';

function Login() {
  return (
    <div className="login">
        <h1>Iniciar Sesion</h1>
        <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
            <button type="submit">Iniciar Sesion</button>
        </form>
    </div>
  );
}

export default Login;