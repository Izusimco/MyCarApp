import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="fixed-top border border-warning"
      >
        <Container className="">
          <Navbar.Brand href="#home">
            <strong>Simco Autos</strong>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div className="">
            <button className="login-button">LogIn</button>
            <button className="signup-button">SignUp</button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
