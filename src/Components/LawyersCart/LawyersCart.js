import React from 'react';
import './LawyersCart.css'

const LawyersCart = (props) => {
    const {cart} = props
    const total = cart.reduce((previous, current) => previous + current.Price,0)
    return (
        <div className = 'cart ms-2'>
            <h1 className = 'text-center'> <span className ='cart-name'>Hire Now</span> </h1>
            <hr className = 'mx-5' />
            <div className = 'ms-3'>
            <h4>Add Lawyer: {cart.length}</h4>
                <ul className ='ms-3'>
               {
                   cart.map(lawyer => <li><h6>{lawyer.Name}</h6></li>)
               }
                </ul>
            
            <h3>Total: {total}</h3>
            <button className = 'btn btn-cart text-white  mb-2'>Hire Now</button>
            <button className = 'btn btn-danger mb-2 ms-3'>Remove</button>
            </div>
        </div>
    );
};

export default LawyersCart;