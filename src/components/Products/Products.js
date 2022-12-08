import React from 'react';
import Rating from '../Rating/Rating';

const Products = ({ product }) => {
    return (
        <div key={product._id} className="card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt="product" />
            </a>
            <div className="card-body">
                <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                </a>
                <Rating
                    key={product._id}
                    product={product}
                ></Rating>
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>
    );
};

export default Products;