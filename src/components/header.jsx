import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Los mejores productos
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/infaltables">Infaltables</Nav.Link>

          <Button
            variant="outline-light"
            as={Link}
            to="/admin"
            className="me-3"
          >
            Administración
          </Button>

          <Link to="/carrito" className="text-white">
            <FaShoppingCart size={20} />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
