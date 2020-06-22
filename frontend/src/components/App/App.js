import React from 'react';
import { Route, Switch } from 'react-router-dom'

// css for main app
import '../../App.css';

import HomePage from '../HomePage/HomePage'
import ProductPage from '../ProductPage/ProductPage'
import DataManipulation from '../DataManipulation/DataManipulation'
import NewProduct from '../NewProduct/NewProduct'
import NewProductName from '../NewProductName/NewProductName'
import AddProductLocation from '../NewProductLocation/NewProductLocation'
import AddProductPrice from '../NewProductPrice/NewProductPrice'
import AddProductImage from '../NewProductImage/NewProductImage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/Product/:id" component={ProductPage} />
      <Route path="/DataManipulation" component={DataManipulation} />
      <Route path="/NewProduct" component={NewProduct} />
      <Route path="/NewProductName" component={NewProductName} />
      <Route path='/AddProductLocation' component={AddProductLocation} />
      <Route path='/AddProductPrice' component={AddProductPrice} />
      <Route path='/AddProductImage' component={AddProductImage} />

    </Switch>
  );
}

export default App;
