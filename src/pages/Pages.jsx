import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainPage/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import TopCate from '../components/top/TopCate';
import Discount from '../components/discount/Discount';
import Shop from '../components/shops/Shop';

const Pages = ({productItems , cartItem , addToCart , shopItems }) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart}/>
      <TopCate/>
      <NewArrivals/>
      <Discount/>
      <Shop shopItems={ shopItems} addToCart={addToCart} />
    </>
  )
}

export default Pages
