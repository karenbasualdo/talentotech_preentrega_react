import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import ProductForm from "./ProductForm";

const API_URL = "https://693f647d12c964ee6b6fcb0e.mockapi.io/products";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [productoEditar, setProductoEditar] = useState(null);

  const cargarProductos = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => toast.error("Error al cargar productos"));
  };

  const eliminarProducto = async (id) => {
    if (!window.confirm("¿Eliminar producto?")) return;

    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    toast.info("Producto eliminado");
    cargarProductos();
  };

  const editarProducto = (producto) => {
    setProductoEditar(producto);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <h2>Panel de Administración</h2>

      <ProductForm
        onSuccess={cargarProductos}
        productoEditar={productoEditar}
        setProductoEditar={setProductoEditar}
      />

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
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => editarProducto(p)}
                >
                  Editar
                </Button>
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
