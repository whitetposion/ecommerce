import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainPage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';
import Discount from '../components/discount/Discount';

const Pages = ({productItems , cartItem , addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
    </>
  )
}

export default Pages
