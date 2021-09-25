import React from 'react';
import './LawyersCart.css'

const LawyersCart = (props) => {
    const {cart} = props
    console.log(cart)
    const total = cart.reduce((previous, current) => previous + current.Price,0)
    return (
        <div className = 'cart ms-2'>
            <h1 className = 'text-center'>Hire Now</h1>
            <h3>Add Lawyer: {cart.length}</h3>
                <ul className ='ms-3'>
               {
                   cart.map(lawyer => <li><h4>{lawyer.Name}</h4></li>)
               }
                </ul>
            
            <h3>Total: {total}</h3>
        </div>
    );
};

export default LawyersCart;