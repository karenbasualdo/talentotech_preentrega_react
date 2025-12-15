import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { useCarrito } from "./CarritoContext";

const Header = () => {
  const { carrito } = useCarrito();

  const cantidadTotal = carrito.reduce(
    (acc, p) => acc + (p.quantity || 1),
    0
  );

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4 shadow">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          💄 Belleza Natural
        </Navbar.Brand>

        <Nav className="ms-auto align-items-center gap-3">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
          <Nav.Link as={Link} to="/infaltables">Infaltables</Nav.Link>

          <Button
            variant="outline-warning"
            as={Link}
            to="/admin"
            className="fw-semibold"
          >
            Administración
          </Button>

          <Link to="/carrito" className="position-relative fs-4 text-white">
            🛒
            {cantidadTotal > 0 && (
              <Badge
                bg="danger"
                pill
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cantidadTotal}
              </Badge>
            )}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
