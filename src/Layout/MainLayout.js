import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">shop</Link>
                </div>
                <div>
                    <Link to="/cart">Cart</Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer className="row center">
                All Right Reserved.
            </footer>
        </div>
    );
};

export default MainLayout;