import { Card, Button } from "react-bootstrap";
import { useCarrito } from "./CarritoContext";

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useCarrito();

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>

        <Button
          variant="primary"
          disabled={product.stock === 0}
          onClick={() => agregarAlCarrito(product)}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
