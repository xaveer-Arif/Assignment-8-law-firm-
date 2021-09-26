import React from 'react';
import './Header.css'


const Header = () => {
    return (
        <div className= 'header'>
            <h1 className ='display-3 fw-bold text-center text-white'>Law 
            <span> Firm</span></h1>
            <h2 className ='text-center text-white total'>Total 100 Billion</h2>
        </div>
    );
};

export default Header;