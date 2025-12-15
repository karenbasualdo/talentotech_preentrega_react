import { Form, Button, Container, Card } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    login(username);
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Card className="p-4" style={{ width: "350px" }}>
        <h3 className="text-center">Iniciar sesión</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="username"
            placeholder="Usuario"
            required
            className="mb-3"
            aria-label="Usuario"
          />
          <Form.Control
            type="password"
            placeholder="Contraseña"
            required
            className="mb-3"
            aria-label="Contraseña"
          />
          <Button type="submit" className="w-100">
            Entrar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Login;
