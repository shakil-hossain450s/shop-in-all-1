import React, { useEffect, useState } from 'react';
import Products from '../../components/Products/Products';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className="row center">
            {
                products.map((product) => <Products
                key={product._id}
                product={product}
            ></Products>)
            }
        </div>
    );
};

export default Home;