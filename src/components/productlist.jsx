import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./productcard";
import { useCarrito } from "./CarritoContext";

const API_URL = "https://693f647d12c964ee6b6fcb0e.mockapi.io/products";

const ProductList = ({ filtro }) => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const filtrados = products.filter((p) => {
    const texto = `${p.title} ${p.description}`.toLowerCase();
    return texto.includes((filtro || "").toLowerCase()) &&
           texto.includes(busqueda.toLowerCase());
  });

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
            <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
          </Col>
        ))}

        {filtrados.length === 0 && <p>No hay productos</p>}
      </Row>
    </>
  );
};

export default ProductList;
