import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    toast.success("Producto agregado al carrito");
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
    toast.info("Producto eliminado");
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    toast.warn("Carrito vaciado");
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
