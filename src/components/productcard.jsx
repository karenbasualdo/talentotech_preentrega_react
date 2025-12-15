import { Card, Button } from "react-bootstrap";
import { useCarrito } from "./CarritoContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { agregarAlCarrito } = useCarrito();

  const handleAdd = () => {
    agregarAlCarrito(product);
    toast.success("Agregado al carrito 💖");
  };

  return (
    <Card className="h-100 producto-card">
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
          onClick={handleAdd}
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

