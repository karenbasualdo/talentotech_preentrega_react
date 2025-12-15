import ProductList from "./productlist";

const Infaltables = () => {
  return (
    <div className="container">
      <h1>Infaltables</h1>
      <p>Los productos que no pueden faltar</p>
      <ProductList filtro="crema" />
    </div>
  );
};

export default Infaltables;
