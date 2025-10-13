import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './productcard';

const ProductList = ({ category = null, agregarAlCarrito }) => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
let url = 'https://fakestoreapi.com/products';
if (category) {
    url = `https://fakestoreapi.com/products/category/${category}`;
}

fetch(url)
    .then((response) => response.json())
    .then((data) => {
    setProducts(data);
    setLoading(false);
    })
    .catch((error) => {
    console.error('Error fetching data:', error);
    setLoading(false);
    });
}, [category]);

if (loading) {
return <div>Cargando productos...</div>;
}

return (
<Row>
    {products.map((product) => (
    <Col md={4} key={product.id} className="mb-4">
        <ProductCard product={product} agregarAlCarrito={agregarAlCarrito} />
    </Col>
    ))}
</Row>
);
};

export default ProductList;

