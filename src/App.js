import './App.css';
import Header from './common/header/Header.jsx';
import { BrowserRouter as Router , Routes ,Route  } from "react-router-dom";
import React from 'react';
import Pages  from "./pages/Pages";


function App() {
  return (
    <>
      <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={< Pages/>}/>
        </Routes>
      </Router>
      </>
    </>
  );
}

export default App;