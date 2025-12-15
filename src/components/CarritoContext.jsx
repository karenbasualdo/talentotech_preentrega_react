import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    const existe = carrito.find((p) => p.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, quantity: 1 }]);
    }

    toast.success("Producto agregado al carrito");
  };

  const incrementar = (id) => {
    setCarrito(
      carrito.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  const decrementar = (id) => {
    setCarrito(
      carrito
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
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
      value={{
        carrito,
        agregarAlCarrito,
        incrementar,
        decrementar,
        eliminarDelCarrito,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
