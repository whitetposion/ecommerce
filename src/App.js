import './App.css';
import Header from './common/header/Header.jsx';
import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import React from 'react';
import Pages  from "./pages/Pages";
import Data  from "./components/flashDeals/Data"
import { useState } from 'react';
import Cart from './common/Cart/Cart';

function App() {
  // fetch data from database
  const { productItems } = Data

  const [cartItem , setCartItem] = useState([])

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id ===product.id)

    if (productExit) {
      setCartItem(cartItem.map((item) =>
      (item.id === product.id? {...productExit, qty:productExit.qty+1 }: item)))
    } else {
      setCartItem([...cartItem,{ ...product ,qty:1} ])
    }
  }
  const decreaseQty = ( product ) => {
    
  }
  return (
    <>
      <>
      <Router>
        <Header cartItem={cartItem}/>
        <Routes>
          
          <Route path='/' element={< Pages productItems={productItems} addToCart={addToCart} />}/>

          <Route path='/cart' element={< Cart cartItem={cartItem} addToCart={addToCart}/>}/>
        
        </Routes>
      </Router>
      </>
    </>
  );
}

export default App;