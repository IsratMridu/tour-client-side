import React from 'react';
import { Link } from 'react-router-dom';



const Package = (props) => {
    const { country ,capital, image,  places, _id } = props.singlePackage;

    

    return (
        <div>
            <div className="col text-center">
    <div className="card h-100">
      <img src={image} className="card-img-top w-100" alt="..."/>
      <div className="card-body bg-secondary text-white">
        <h3 className="card-title py-2"> Country: {country}</h3>
        <h4 className="card-title py-2">Capital: {capital}</h4>
        <h5 className="card-text py-2">Places To Visit: {places}</h5>
        <div className='py-3'>

        <Link to={`/placeorder/${_id}`}>
        
        <button className='btn btn-success text-white py-2 px-3'>Book This Package</button>
        
        </Link>


        </div>
      </div>
      
    </div>

    
  </div>
            
        </div>
    );
};

export default Package;