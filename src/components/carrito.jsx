import { Card, Button, Row, Col } from "react-bootstrap";
import { useCarrito } from "./CarritoContext";

const Carrito = () => {
  const {
    carrito,
    incrementar,
    decrementar,
    eliminarDelCarrito,
    vaciarCarrito,
  } = useCarrito();

  const total = carrito.reduce(
    (acc, p) => acc + Number(p.price) * p.quantity,
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
              <Col md={12} key={p.id} className="mb-3">
                <Card className="p-3 d-flex flex-row align-items-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: "100px", marginRight: "20px" }}
                  />

                  <div className="flex-grow-1">
                    <h5>{p.title}</h5>
                    <p>Precio: ${p.price}</p>
                    <p>Subtotal: ${(p.price * p.quantity).toFixed(2)}</p>

                    <div className="d-flex align-items-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => decrementar(p.id)}
                      >
                        -
                      </Button>

                      <span className="mx-3">{p.quantity}</span>

                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => incrementar(p.id)}
                      >
                        +
                      </Button>

                      <Button
                        variant="danger"
                        size="sm"
                        className="ms-3"
                        onClick={() => eliminarDelCarrito(p.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>

          <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>

          <Button variant="warning" onClick={vaciarCarrito}>
            Vaciar carrito
          </Button>
        </>
      )}
    </div>
  );
};

export default Carrito;
