import ProductList from "./productlist";

const Ofertas = () => {
  return (
    <div className="container">
      <h1>Ofertas</h1>
      <p>Productos en promoción</p>
      <ProductList filtro="oferta" />
    </div>
  );
};

export default Ofertas;
