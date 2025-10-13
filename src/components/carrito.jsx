import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const Carrito = ({ carrito, eliminarDelCarrito }) => {
const total = carrito.reduce((acum, producto) => acum + producto.price, 0);

return (
<div className="container">
    <h1>Carrito de compras</h1>
    {carrito.length === 0 ? (
    <p>No hay productos en el carrito.</p>
    ) : (
    <>
        <Row>
        {carrito.map((producto, index) => (
            <Col md={4} key={index} className="mb-3">
            <Card>
                <Card.Img
                variant="top"
                src={producto.image}
                alt={producto.title}
                style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                <Card.Title>{producto.title}</Card.Title>
                <Card.Text>${producto.price}</Card.Text>
                <Button
                    variant="danger"
                    onClick={() => eliminarDelCarrito(producto.id)}
                >
                    Eliminar
                </Button>
                </Card.Body>
            </Card>
            </Col>
        ))}
        </Row>
        <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
    </>
    )}
</div>
);
};

export default Carrito;
