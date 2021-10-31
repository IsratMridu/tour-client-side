import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const AllOrders = () => {
    
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/allOrders')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])
    // console.log(orders);


    const deleteOrder = (id) =>{
       const confirm = window.prompt('Are You Sure You Want To Delete?');
       if(confirm){
        fetch(`http://localhost:5000/deleteOrder/${id}`,{
            method: 'DELETE',
            headers: {
                'content-type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            alert('Order Deleted Successfully');
            const restOrder = orders.filter(order =>order._id !== id);
            setOrders(restOrder);
        });
       }
       else{
           return;
       }
    }



    



    return (
        <div className='d-flex justify-content-center align-items-center bg-primary pb-5'>
            <div className='mt-5 row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 gy-5 text-center container'>
                {
                    orders.map(order => <div className="col">
                    <div className="card bg-success text-white">
                      
                      <div className="card-body">
                        <h5 className="card-title">User: {order.userName}</h5>
                        <p className="card-text">Travel Country: {order.country}</p>
                        <p className="card-text">Capital: {order.capital}</p>
                        <h3 className="card-text">Status: {order.orderStatus}</h3>
                        <div className='d-flex justify-content-evenly'>
                        <button className='btn btn-danger px-3 mt-4 ' onClick={()=> deleteOrder(order?._id)}>Delete</button>
                        <Link to={`/update/${order?._id}`}>
                        <button className='btn btn-warning px-3 mt-4 '>Update</button>
                        </Link>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                       )
                }

            </div>
            
            
        </div>
    );
};

export default AllOrders;