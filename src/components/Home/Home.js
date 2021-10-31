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
            <div className=''>
            <h1 className='text-center text-danger mb-5 pt-5'>All Packages From Our Website Is Enough To Make Your Smile </h1>
            <div className='row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-5 container mx-auto py-5'>


            

            {
                packages.map((singlePackage, index)=> <Package
                
                key={singlePackage._id}
                singlePackage ={singlePackage}
                
                ></Package>)
            }

            </div>
            </div>

            <div className='my-5 text-center'>
                <h1 className='text-danger pb-5'>Below Are Some Mesmerizing Pictures From Previous Word Tours.</h1>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.pexels.com/photos/4173557/pexels-photo-4173557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/2516401/pexels-photo-2516401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/2042109/pexels-photo-2042109.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                
            </div>


            <div className='my-5 container'>
                <h1 className='text-center text-danger pb-5'>Frequently Asked Questions With Answer</h1>

                <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What should be kept in mind while Travelling?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-danger">Do your research, Don’t draw attention, Make copies of important documents, Keep your friends and family updated, Be wary of public Wi-Fi, Safeguard your hotel room, Be aware of your surroundings, etc.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What is the best world trip?
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-danger">South Island, New Zealand, Paris, Bora Bora, Maui, Tahiti, London, Rome, Phuket, etc.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How long is a world tour?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body text-danger">Having said this, on the market you find RTW Tours from 14 days to a year. Generally travellers stay out from 3 to 6 months. How to find Time to travel Around the World? Do a Trip Around the World is no longer thought of as a frivolous, self-indulgent, or escapist vacation.</div>
    </div>
  </div>
</div>


            </div>
            
           
            
        </div>
    );
};

export default Home;