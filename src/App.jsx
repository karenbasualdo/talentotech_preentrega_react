import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import Home from './components/home';
import Ofertas from './components/ofertas';
import Infaltables from './components/infaltables';
import Login from './components/login';
import Carrito from './components/carrito';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    alert(`Producto "${producto.title}" agregado al carrito`);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/ofertas" element={<Ofertas agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/infaltables" element={<Infaltables agregarAlCarrito={agregarAlCarrito} />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/carrito"
            element={<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
