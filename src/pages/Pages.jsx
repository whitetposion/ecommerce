import React from 'react';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainPage/Home';

const Pages = ({productItems}) => {
  return (
    <>
      <Home/>
      <FlashDeals productItems={productItems}/>
    </>
  )
}

export default Pages
