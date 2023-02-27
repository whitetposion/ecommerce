import React from 'react';
import Head from './Head';
import "./Header.css";
import Search from './Search';
import Navbar from './Navbar';

const Header = ({ cartItem}) => {
  return (
    <>
      <Head/>
      <Search cartItem={cartItem}/>
      <Navbar/>


    </>
  );
};

export default Header
