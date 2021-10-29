import React from 'react';
import './Home.css'
import banner from '../../images/turkey-antalya.jpg'

const Home = () => {
    return (
        <div className='banner-image'>
            
            <img src={banner} alt='banner_image' className="img-fluid " />
            <div className='z_index'>


            </div>
           
            
        </div>
    );
};

export default Home;