import React, { useEffect, useState } from 'react';
import './Body.css'
import LawyersDetails from '../LawyersDetails/LawyersDetails';
import LawyersCart from '../LawyersCart/LawyersCart';


const Body = () => {
    const [lawyers, setLawyers] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('./data.JSOn')
        .then(res => res.json())
        .then(data => setLawyers(data))
    },[])

    const addToCart = (lawyer) => {
        const newCart = [...cart, lawyer];
        setCart(newCart)
    }
    return (
        <div className = 'lawyers-container'>

            {/* for lawyers details */}
            <div className = 'row'>
                {
                    lawyers.map(lawyer => <LawyersDetails
                    key = {lawyer.Key}
                    addToCart = {addToCart}
                    lawyer = {lawyer}>
                    </LawyersDetails>)
                }
            </div>

            {/* for lawyers cart */}
            <div>
                <LawyersCart 
                cart = {cart}
                ></LawyersCart>
            </div>
        </div>
    );
};

export default Body;