import React, { useState, useEffect } from 'react';
import './Home.css'
import banner from '../../images/turkey-antalya.jpg'
import Package from '../Package/Package';

const Home = () => {
    const [packages,setPackages] = useState([]);
    
   

    useEffect(()=>{
        fetch('https://grim-village-10038.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data));
    },[])
    return (
        <div className='banner-image'>
            
            <img src={banner} alt='banner_image' className="img-fluid " />
            <div className='bg-info'>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-5 container mx-auto py-5'>


            

            {
                packages.map((singlePackage, index)=> <Package
                
                key={singlePackage._id}
                singlePackage ={singlePackage}
                
                ></Package>)
            }

            </div>
            </div>
            
           
            
        </div>
    );
};

export default Home;