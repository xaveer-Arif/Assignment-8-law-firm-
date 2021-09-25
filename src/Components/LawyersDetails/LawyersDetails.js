import React from 'react';
import './LawyersDetails.css'

const LawyersDetails = (props) => {
    const {Name, image, Net, Occupation, Citizenship, Price} = props.lawyer
    // console.log(props)
    return (
        
            <div className="col-md-4 mb-3 ">
  <div className="col">
    <div className="card h-100">
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4>{Name}</h4>
        <h5>Price:{Price}</h5>
        <h5>Occupation:{Occupation}</h5>
        <h5>Citizenship:{Citizenship}</h5>
        <h5>Net Worth:{Net}</h5>
        <button 
        onClick = {() => props.addToCart(props.lawyer)}
        className ='btn btn-warning'>Add To Cart</button>
      </div>
    </div>
  </div>

         

  </div>
       
    );
};

export default LawyersDetails;