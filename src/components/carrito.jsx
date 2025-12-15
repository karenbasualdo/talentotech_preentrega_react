import { Card, Button, Row, Col } from "react-bootstrap";
import { useCarrito } from "./CarritoContext";

const Carrito = () => {
  const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarrito();

  const total = carrito.reduce(
    (acc, p) => acc + Number(p.price),
    0
  );

  return (
    <div>
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>No hay productos.</p>
      ) : (
        <>
          <Row>
            {carrito.map((p) => (
              <Col md={4} key={p.id} className="mb-3">
                <Card>
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>${p.price}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => eliminarDelCarrito(p.id)}
                    >
                      Eliminar
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <h4>Total: ${total.toFixed(2)}</h4>

          <Button variant="warning" onClick={vaciarCarrito}>
            Vaciar carrito
          </Button>
        </>
      )}
    </div>
  );
};

export default Carrito;

