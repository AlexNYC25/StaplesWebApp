import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import ProductLayout from './ProductLayout'
import HomePage from './HomePage'
import ProductPage from './ProductPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/Product/:id" component={ProductPage} />
    </Switch>
  );
}

export default App;
