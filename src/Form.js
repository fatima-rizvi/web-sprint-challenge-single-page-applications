import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import Conformation from './Confirmation_Page'

export default function PizzaForm (props) {

    const { values, change, submit, disabled, errors, orders } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
    <div>
        <div className = 'pizza-form'>
            <form onSubmit = {onSubmit}>
                <label>Name:&nbsp;
                    <input 
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label>Size:&nbsp;
                    <select
                        onChange = {onChange}
                        value = {values.size} 
                        name = 'size'   
                    >
                        <option value = ''>--Select a size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                        <option value = 'extra-large'>Extra Large</option>
                    </select>
                </label>
                <p>Toppings:</p>
                <label>Pepperoni:
                    <input 
                        type = 'checkbox'
                        name = 'pepperoni'
                        checked = {values.pepperoni}
                        onChange = {onChange}
                    />
                </label>
                <label>Jalepenos:&nbsp;
                    <input 
                        type = 'checkbox'
                        name = 'jalepenos'
                        checked = {values.jalepenos}
                        onChange = {onChange}
                    />
                </label>
                <label>Mushrooms:&nbsp;
                    <input 
                        type = 'checkbox'
                        name = 'mushrooms'
                        checked = {values.mushrooms}
                        onChange = {onChange}
                    />
                </label>
                <label>Pineapple:&nbsp;
                    <input 
                        type = 'checkbox'
                        name = 'pineapple'
                        checked = {values.pineapple}
                        onChange = {onChange}
                    />
                </label>
                <label>Olives:&nbsp;
                    <input 
                        type = 'checkbox'
                        name = 'olives'
                        checked = {values.olives}
                        onChange = {onChange}
                    />
                </label>
                <label>Special Instructions:&nbsp;
                <input 
                    value = {values.instruction}
                    onChange = {onChange}
                    name = 'instruction'
                    type = 'text'
                    />
                </label>
                <div className = 'errors'>
                    <div>{errors.name}</div>
                </div>
                <button disabled = {disabled}>Add to Order</button>
            </form>
        </div>
        <div className = 'allOrders'>
            <div className = 'confirm-link'>
                <button>
                <Link to='/confirmed' className = 'confirmBtn'>Confirm Order</Link>
                </button>
            </div>
        </div>
        <Route path = '/confirmed'>
            <Conformation fullOrder = {orders}/>
        </Route>
    </div>
    )    

}
