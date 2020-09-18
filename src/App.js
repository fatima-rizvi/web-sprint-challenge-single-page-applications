import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PizzaForm from './Form'
import Home from './Home'
import schema from './formSchema'
import * as yup from 'yup'

const initialValues = {
  //Text input
  name: '',
  instruction: 'none',
  //Dropdown
  size: '',
  //Check boxes
  pepperoni: false,
  jalepenos: false,
  mushrooms: false,
  pineapple: false,
  olives: false,
  glutenFree: false    
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
      [name]: value
    })
  }

  const submitValues = () => {
    const newOrder = {
      name: formValues.name.trim(),
      instruction: formValues.instruction.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'jalepenos','mushrooms','pineapple','olives'].filter(top => formValues[top]),
      glutenFree: formValues.glutenFree
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
          <Link to='/pizza' className = 'buildPizzaBtn'>Build My Pizza</Link>
        </button>
      </div>
      <Switch>
        <Route path = '/pizza'>
          <PizzaForm 
            values = {formValues}
            change = {inputChange}
            submit = {submitValues}
            disabled = {disabled}
            errors = {formErrors}
            allOrder = {orders}
          />
        </Route>
        <Route exact strict path = '/'>
          <Home />
        </Route>
      </Switch>
      <div className = 'order-details'>
        <h3>Order details:</h3>
            {
                orders.map((order) => {
                    let glutenFree;
                    if(order.glutenFree === true){
                      glutenFree = 'Yes'
                    }else{
                      glutenFree = 'No'
                    }
                    return(
                    <div className = 'single-pizza'>
                        <p>Name: {order.name} </p>
                        <p>Size: {order.size} </p>
                        <p>Gluten-Free Crust: {glutenFree}</p>
                        <p>Toppings: {order.toppings} </p>
                        <p>Special Instrutions: {order.instruction} </p>
                    </div>
                    )
                })
            }
      </div>
    </>
  );
};
export default App;
