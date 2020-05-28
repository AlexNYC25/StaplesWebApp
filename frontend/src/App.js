import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import ProductLayout from './ProductLayout'
import HomePage from './HomePage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path="/Product/:id" component={ProductLayout} />
    </Switch>
  );
}

export default App;
