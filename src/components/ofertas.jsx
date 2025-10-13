import React from 'react';
import ProductList from './productlist';

const Ofertas = ({ agregarAlCarrito }) => {
return (
<div className="container">
    <h1>Ofertas</h1>
    <h4>Ropa de Mujer</h4>
    <ProductList category="women's clothing" agregarAlCarrito={agregarAlCarrito} />
</div>
);
};

export default Ofertas;
