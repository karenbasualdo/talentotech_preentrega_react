import { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const API_URL = "https://693f647d12c964ee6b6fcb0e.mockapi.io/products";

const ProductForm = ({ onSuccess, productoEditar, setProductoEditar }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    stock: "",
    category: "",
  });

  useEffect(() => {
    if (productoEditar) {
      setForm({
        title: productoEditar.title || "",
        price: productoEditar.price || "",
        description: productoEditar.description || "",
        image: productoEditar.image || "",
        stock: productoEditar.stock || "",
        category: productoEditar.category || "",
      });
    }
  }, [productoEditar]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title) return toast.error("Nombre obligatorio");
    if (Number(form.price) <= 0) return toast.error("Precio inválido");
    if (form.description.length < 10)
      return toast.error("Descripción muy corta");

    const producto = {
      title: form.title,
      price: form.price,
      description: form.description,
      image: form.image,
      stock: Number(form.stock),
      category: form.category,
    };

    try {
      if (productoEditar) {
        await fetch(`${API_URL}/${productoEditar.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        });
        toast.success("Producto actualizado");
        setProductoEditar(null);
      } else {
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(producto),
        });
        toast.success("Producto creado");
      }

      setForm({
        title: "",
        price: "",
        description: "",
        image: "",
        stock: "",
        category: "",
      });

      onSuccess();
    } catch (error) {
      toast.error("Error al guardar producto");
    }
  };

  return (
    <Card className="p-3 mb-4">
      <h4>{productoEditar ? "Editar producto" : "Agregar producto"}</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          name="title"
          placeholder="Nombre"
          className="mb-2"
          value={form.title}
          onChange={handleChange}
        />

        <Form.Control
          name="price"
          type="number"
          placeholder="Precio"
          className="mb-2"
          value={form.price}
          onChange={handleChange}
        />

        <Form.Control
          name="image"
          placeholder="URL imagen"
          className="mb-2"
          value={form.image}
          onChange={handleChange}
        />

        <Form.Control
          name="description"
          placeholder="Descripción"
          className="mb-2"
          value={form.description}
          onChange={handleChange}
        />

        <Form.Control
          name="stock"
          type="number"
          placeholder="Stock"
          className="mb-2"
          value={form.stock}
          onChange={handleChange}
        />

        <Form.Control
          name="category"
          placeholder="Categoría"
          className="mb-3"
          value={form.category}
          onChange={handleChange}
        />

        <Button type="submit">
          {productoEditar ? "Actualizar" : "Guardar"}
        </Button>

        {productoEditar && (
          <Button
            variant="secondary"
            className="ms-2"
            onClick={() => {
              setProductoEditar(null);
              setForm({
                title: "",
                price: "",
                description: "",
                image: "",
                stock: "",
                category: "",
              });
            }}
          >
            Cancelar
          </Button>
        )}
      </Form>
    </Card>
  );
};

export default ProductForm;


