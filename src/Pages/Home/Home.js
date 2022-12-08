import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Products from '../../components/Products/Products';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import MessageBox from '../../components/MessageBox/MessageBox';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('http://localhost:5000/products');
                setLoading(false);
                setProducts(data);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [])
    return (
        <section>
            {
                loading ? <LoadingBox></LoadingBox>
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox>
                        :
                        <div className="row center">
                            {
                                products.map((product) => <Products
                                    key={product._id}
                                    product={product}
                                ></Products>)
                            }
                        </div>
            }

        </section>
    );
};

export default Home;