import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Login from "./components/login";
import Carrito from "./components/carrito";
import Ofertas from "./components/ofertas";
import Infaltables from "./components/infaltables";
import Admin from "./components/Admin";

import { AuthProvider } from "./components/AuthContext";
import { CarritoProvider } from "./components/CarritoContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <Router>
          <Header />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ofertas" element={<Ofertas />} />
              <Route path="/infaltables" element={<Infaltables />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/carrito"
                element={
                  <ProtectedRoute>
                    <Carrito />
                  </ProtectedRoute>
                }
              />

              {/* RUTA ADMIN */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
          <ToastContainer position="top-right" />
        </Router>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
