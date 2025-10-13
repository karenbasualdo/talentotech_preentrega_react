import React from 'react';
import ProductList from './productlist';

const Home = ({ agregarAlCarrito }) => {
return (
<div className="container">
    <h1>Todos los productos</h1>
    <ProductList agregarAlCarrito={agregarAlCarrito} />
</div>
);
};

export default Home;
