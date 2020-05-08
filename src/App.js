import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ProductsContainer from './containers/ProductsContainer.js' ;
import Footer from './components/Footer.js'

function App() {
  return (
    <div>
      <Header/>
      <ProductsContainer/>
      <Footer/>
     
    </div> 

  );
}

export default App;
