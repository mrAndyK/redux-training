import React from 'react';
import './App.css';
import ProductCard from "./features/products/ProductCard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ProductCard
              name="T-Shirt"
              description="nice shirt, bro"
              price={20} />
          <ProductCard
              name='Bucket hat'
              description='for your empty head'
              price={10} />
          <ProductCard
              name='Fleece joggers'
              description='best for summer'
              price={40}/>
      </header>
    </div>
  );
}

export default App;
