import './App.css';
import Header from './common/header/Header.jsx';
import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import React from 'react';
import Pages  from "./pages/Pages";
import Data  from "./components/flashDeals/Data"
import { useState } from 'react';

function App() {
  // fetch data from database
  const { productItems } = Data
  const [cartItem , setCartItem] = useState([])
  return (
    <>
      <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={< Pages productItems={productItems}/>}/>
        </Routes>
      </Router>
      </>
    </>
  );
}

export default App;