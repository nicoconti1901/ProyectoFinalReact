import Container from "react-bootstrap/Container";
import { Nav, Navbar} from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  const handleButtonClick = () => {
    window.location.href = "InicioSesion";
};
  return (
    <Navbar expand="xl" className="bg-success-subtle" bg="dark" data-bs-theme="dark">
      <Container >
        <Navbar.Brand href="#home">Shop Nico Conti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Registro">Registro</Nav.Link> &nbsp;
           <img src="src/assets/icons8-buying-50 (1).png" alt="" />
          </Nav>
          <button type="button" className="btn-login" onClick={handleButtonClick}>Inicia Sesion</button>
          <img src="dist/assets/icons8-circular-argentina-48.png" alt="" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
