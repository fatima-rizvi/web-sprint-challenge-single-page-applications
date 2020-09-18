import React from 'react'

export default function Conformation (props) {
    const {fullOrder} = props
    return(
        <div>
            <h2>Congrats!!</h2>
            <h3>Pizza is on it's way!</h3>
            <h3>Order details:</h3>
            {
                fullOrder.map((order) => {
                    console.log(order);
                    return(
                    <div className = 'single-pizza'>
                        <p>Name: {order.name} </p>
                        <p>Size: {order.size} </p>
                        <p>Toppings: {order.toppings} </p>
                        <p>Special Instrutions: {order.instruction} </p>
                    </div>
                    )
                })
            }
        </div>
    )
}