import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './HomePage'
import ProductPage from './ProductPage'
import DataManipulation from './DataManipulation'
import NewProduct from './NewProduct'
import NewProductName from './NewProductName'
import AddProductLocation from './NewProductLocation'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/Product/:id" component={ProductPage} />
      <Route path="/DataManipulation" component={DataManipulation} />
      <Route path="/NewProduct" component={NewProduct} />
      <Route path="/NewProductName" component={NewProductName} />
      <Route path='/AddProductLocation' component={AddProductLocation} />
    </Switch>
  );
}

export default App;
