import './PlaceOrder.css'
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../Context/useAuth';


const PlaceOrder = () => {
    const {user} = useAuth();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const {id} = useParams();
    const [plan, setPlan] = useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/order/${id}`)
        .then(res => res.json())
        .then(data => setPlan(data))
    },[])

    const placeOrder = (e) =>{
        e.preventDefault();
        const singleOrder = {
            userName : user.displayName,
            userEmail: emailRef.current.value,
            phone: phoneRef.current.value,
            address: addressRef.current.value,
            country: plan?.country,
            capital: plan?.capital,
            places: plan?.places,
            description: plan?.description,
            orderStatus: 'pending'

        };

        // console.log(singleOrder);

        fetch('http://localhost:5000/addUserOrder',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(singleOrder)

        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged)
            {
                alert('Booking Done Successfully');
                e.target.reset();
                setPlan({});


            }
        });
        



    }

    return (
        <div className='text-center'>
        

              <div className='row g-0'>
                  <div className='col-lg-7 col-md-7 col-sm-12 col-12 text-center pt-5'>
                  <img src={plan?.image} className='w-75 mb-4 size' alt='location_image' />
                  <h3 className='mb-4'>Country: {plan?.country}</h3>
                  <h3 className='mb-4'>Capital: {plan?.capital}</h3>
                  <h5 className='mb-4'>Places To Visit: {plan?.places}</h5>
                  <h6 className='mb-4'>Description: {plan?.description}</h6>

                  </div>

                  <div className='col-lg-5 col-md-5 col-sm-12 col-12 pt-5'>
                  <form onSubmit={placeOrder}>
                      <h4>User Name</h4>
                      <input type='text' defaultValue={user?.displayName} className='w-50 p-2 mb-4 text-center' />
                      <h4>Email</h4>
                      <input type='email' placeholder='Enter Your Email:' ref={emailRef} className='w-50 p-2 text-center mb-4' />
                      <h4>Phone Number</h4>
                      <input type='text' placeholder='Enter Your Phone Number:' className='w-50 p-2 text-center mb-4' ref={phoneRef} />
                      <h4>Address</h4>
                      <input placeholder='Enter Address:' className='w-75 p-2 text-center mb-4' ref={addressRef} />
                      <br/>
                      <input type='submit' value='Book This Package' className='mt-3 py-2 bg-success text-white rounded px-3' />
                    </form>


                  </div>

              </div>
                
         
          
            
            
        </div>
    );
};

export default PlaceOrder;