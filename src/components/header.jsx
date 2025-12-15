import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Button, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCarrito } from "./CarritoContext";

const Header = () => {
  const { carrito } = useCarrito();

  const cantidadTotal = carrito.reduce(
    (acc, p) => acc + p.quantity,
    0
  );

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          💄 Belleza Natural
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

          <Link to="/carrito" className="position-relative text-white">
            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
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

