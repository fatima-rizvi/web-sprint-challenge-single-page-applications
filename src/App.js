import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'
import PizzaForm from './Form'

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <h2>Click the button below to get started!</h2>
      <nav>
        <div className = 'pizza-link'>
          <Link to='/pizza-form' className = 'buildPizzaBtn'>Build My Pizza</Link>
        </div>
      </nav>
      <Switch>
        <Route path = '/pizza-form'>
          <PizzaForm />
        </Route>
      </Switch>
    </>
  );
};
export default App;
