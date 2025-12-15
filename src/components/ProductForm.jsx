import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { toast } from "react-toastify";

const ProductForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title) {
      toast.error("El nombre es obligatorio");
      return;
    }

    if (form.price <= 0) {
      toast.error("El precio debe ser mayor a 0");
      return;
    }

    if (form.description.length < 10) {
      toast.error("La descripción debe tener al menos 10 caracteres");
      return;
    }

    try {
      await fetch(
        "https://693f647d12c964ee6b6fcb0e.mockapi.io/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      toast.success("Producto creado correctamente");
      setForm({
        title: "",
        price: "",
        description: "",
        image: "",
      });

      onSuccess();
    } catch (error) {
      toast.error("Error al crear el producto");
    }
  };

  return (
    <Card className="p-3 mb-4">
      <h4>Agregar producto</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          name="title"
          placeholder="Nombre del producto"
          className="mb-2"
          value={form.title}
          onChange={handleChange}
          aria-label="Nombre del producto"
        />

        <Form.Control
          name="price"
          type="number"
          placeholder="Precio"
          className="mb-2"
          value={form.price}
          onChange={handleChange}
          aria-label="Precio del producto"
        />

        <Form.Control
          name="image"
          placeholder="URL de la imagen"
          className="mb-2"
          value={form.image}
          onChange={handleChange}
          aria-label="Imagen del producto"
        />

        <Form.Control
          name="description"
          placeholder="Descripción"
          className="mb-2"
          value={form.description}
          onChange={handleChange}
          aria-label="Descripción del producto"
        />

        <Button type="submit">Guardar producto</Button>
      </Form>
    </Card>
  );
};

export default ProductForm;
