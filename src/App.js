// import logo from './logo.svg';
// import './App.css';

import Products from "./components/Products/Products";
import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">shop</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => <Products
              key={product._id}
              product={product}
            ></Products>)
          }

        </div>
      </main>
      <footer className="row center">
        All Right Reserved.
      </footer>
    </div>
  );
}

export default App;
