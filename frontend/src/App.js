import React from 'react';

import './App.css';

import Navbar from './Navbar.js'
import ProductLayout from './ProductLayout'

function App() {
  const searchVar = ''
  return (
    <div className="App">
      <Navbar />
      <ProductLayout search={searchVar} />
    </div>
  );
}

export default App;
