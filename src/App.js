import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Route, Link, Switch } from 'react-router-dom'
import PizzaForm from './Form'
import Home from './Home'

const initialValues = {
  //Text input
  name: '',
  specialIntructions: '',
  //Dropdown
  size: '',
  //Check boxes
  pepperoni: false,
  jalepenos: false,
  mushrooms: false,
  pineapple: false,
  olives: false    
}

const initialFormErrors = {
  name: '',
}

const initialOrder = []
const initialDisabled = true

const App = () => {

  //States
  const [orders, setOrders] = useState(initialOrder)
  const [formValues, setFormValues] = useState(initialValues)
  const [disabled, setDisabled] = useState(initialDisabled)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  //Helpers
  const postNewOrder = newOrder => {
    setOrders([...orders, newOrder])
    setFormValues(initialValues)
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(valid =>
        setFormErrors({
          ...formErrors, [name]: ""
        }))
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]:err.errors[0]
        })
      })
  }

  //Event handlers
  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [nae]: value
    })
  }

  const submitValues = () => {
    const newOrder = {
      name: formValues.name.trim(),
      specialIntructions: formValues.specialIntructions.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'jalepenos','mushrooms','pineapple','olives'].filter(top => formValues[top])
    }
    postNewOrder(newOrder)
  }
  
//Use effect
useEffect(() => {
  schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid)
    })
}, [formValues])

  return (
    <>
      <div className = 'home-link'>
        <Link to='/' >Home</Link>
      </div>
      <h1>Lambda Eats</h1>
      <h2>Click the button below to get started!</h2>
      <div className = 'pizza-link'>
        <button>
          <Link to='/pizza-form' className = 'buildPizzaBtn'>Build My Pizza</Link>
        </button>
      </div>
      <Switch>
        <Route path = '/pizza-form'>
          <PizzaForm 
            values = {formValues}
            change = {inputChange}
            submit = {submitValues}
            disabled = {disabled}
            errors = {formErrors}
          />
        </Route>
        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </>
  );
};
export default App;
