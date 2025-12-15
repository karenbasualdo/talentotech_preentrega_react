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
        id: productoEditar.id,
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
      image: form.i
