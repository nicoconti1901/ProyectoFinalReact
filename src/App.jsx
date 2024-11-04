
import { BrowserRouter as Router } from "react-router-dom";
import Public from "./Routes/Public.jsx";
import Container from "react-bootstrap/Container";
import NavBar from "./componentes/NavBar/NavBar.jsx";
import Footer from "./componentes/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Container>
          <Public />
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
