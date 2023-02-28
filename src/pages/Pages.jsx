import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainPage/Home';
import TopCate from '../components/top/TopCate';

const Pages = ({productItems , cartItem , addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
    </>
  )
}

export default Pages
