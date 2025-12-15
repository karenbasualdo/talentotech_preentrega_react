import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./productcard";
import { useCarrito } from "./CarritoContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);

  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    fetch("https://693f647d12c964ee6b6fcb0e.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtrados = products.filter((p) =>
    p.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (loading) {
    return <p>Cargando productos...</p>;
  }

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
        {filtrados.length === 0 && <p>No hay productos</p>}

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
