import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./productcard";
import { useCarrito } from "./CarritoContext";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtrados = products.filter((p) =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <input
        className="form-control mb-3"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        aria-label="Buscar productos"
      />

      <Row>
        {filtrados.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard
              product={product}
              agregarAlCarrito={agregarAlCarrito}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ProductList;
