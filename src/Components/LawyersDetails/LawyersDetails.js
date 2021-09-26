import React from 'react';
import './LawyersDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const LawyersDetails = (props) => {
    const {Name, image, Net, Occupation, Citizenship, Price} = props.lawyer
    // console.log(props)
    const icon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        
  <div className="col-md-4 mb-3   ">
  <div className="col  lawyer-card">
    <div className="card card-body h-100">
      <div className ='text-center mb-4'>
        <img src={image} className="card-img-top " alt="..."/>
      </div>
      
      <div className=" text-white">
        <h3><span className = 'text-name'>{Name}</span></h3>
        <h5><span className = 'text'>Price:</span> {Price}</h5>
        <h5><span className = 'text'>Occupation:</span> {Occupation}</h5>
        <h5><span className ='text'>Citizenship:</span>{Citizenship}</h5>
        <h5><span className ='text'>Net Worth:</span> {Net}</h5>
        <button 
        onClick = {() => props.addToCart(props.lawyer)}
        className ='btn Lawyer-btn'><strong>{icon} Add To Cart</strong> </button>
      </div>
    </div>
  </div>
  </div>
       
    );
};

export default LawyersDetails;