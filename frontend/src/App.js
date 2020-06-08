import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import ProductLayout from './ProductLayout'
import HomePage from './HomePage'
import ProductPage from './ProductPage'
import DataManipulation from './DataManipulation'
import NewProduct from './NewProduct'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/Product/:id" component={ProductPage} />
      <Route path="/DataManipulation" component={DataManipulation} />
      <Route path="/NewProduct" component={NewProduct} />
    </Switch>
  );
}

export default App;
