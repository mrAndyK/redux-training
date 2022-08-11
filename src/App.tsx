import React from 'react';
import CardInfo from "./features/cart/CardInfo";
import {ProductsWrapper} from "./features/product/ProductWrapper";




function App() {
  return (
    <div className="App">
      <header>
          <CardInfo />
      </header>
        <main>
            <ProductsWrapper />
        </main>
    </div>
  );
}

export default App;
