import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  // Sample product data (replace with API call later)
  const fetchProducts = () => {
    const sampleProducts = [
      { id: 1, name: 'Product A', price: '$10' },
      { id: 2, name: 'Product B', price: '$20' },
      { id: 3, name: 'Product C', price: '$30' },
    ];
    setProducts(sampleProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
