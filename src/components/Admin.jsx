import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductForm from "./ProductForm";

const Admin = () => {
  const [products, setProducts] = useState([]);

  const cargarProductos = () => {
    fetch("https://693f647d12c964ee6b6fcb0e.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => toast.error("Error al cargar productos"));
  };

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de eliminar este producto?"
    );

    if (!confirmar) return;

    try {
      await fetch(
        `https://693f647d12c964ee6b6fcb0e.mockapi.io/products/${id}`,
        {
          method: "DELETE",
        }
      );

      toast.info("Producto eliminado");
      cargarProductos();
    } catch (error) {
      toast.error("Error al eliminar producto");
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <h2>Panel de Administración</h2>

      <ProductForm onSuccess={cargarProductos} />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => eliminarProducto(p.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
