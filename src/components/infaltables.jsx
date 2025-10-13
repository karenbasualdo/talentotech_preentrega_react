import React from 'react';
import ProductList from './productlist';

const Infaltables = ({ agregarAlCarrito }) => {
return (
<div className="container">
    <h1>Infaltables</h1>
    <ProductList category="jewelery" agregarAlCarrito={agregarAlCarrito} />
</div>
);
};

export default Infaltables;
