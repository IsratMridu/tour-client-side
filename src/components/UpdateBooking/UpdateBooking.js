import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateBooking = () => {
    const {id} = useParams();
    const [booking, setBooking] =  useState({});
    useEffect(()=>{
        fetch(`http://localhost:5000/updateBooking/${id}`)
        .then(res => res.json())
        .then(data => setBooking(data));
    },[])
    console.log(booking);

    const handleStatus = (e) =>{
        const updatedValue = {
            address: booking.address,
            capital: booking.capital,
            country: booking.country,
            description: booking.description,
            orderStatus: e.target.value,
            phone: booking.phone,
            places: booking.places,
            userEmail: booking.userEmail,
            userName: booking.userName
            



        }

        setBooking(updatedValue);

        

    }

    const updateDone= (e) =>{
        e.preventDefault();
        fetch(`https://grim-village-10038.herokuapp.com/update/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('Status Updated Successfully');
                setBooking({});
                
            }
        });
    }

    
   
    return (
        <div className='bg-success py-5'>
           <form className='text-center' onSubmit={updateDone}>
               <h3 className='text-white'>User Name</h3>
               <input className='mb-4' value={booking.userName}/>
               <h3 className='text-white'>Travel Country</h3>
               <input className='mb-4' value={booking.country}/>
               <h3 className='text-white'>Capital</h3>
               <input className='mb-4' value={booking.capital}/>
               <h3 className='text-white'>Order Status</h3>
               <input className='mb-4' value={booking.orderStatus || ''} onChange={handleStatus}/>
               <br/><br/>
               <input type='submit' value='Submit' className='bg-primary text-white p-2' />



           </form>
            
        </div>
    );
};

export default UpdateBooking;