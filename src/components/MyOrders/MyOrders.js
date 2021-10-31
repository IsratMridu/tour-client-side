import React, { useEffect, useState } from 'react';
import useAuth from '../Context/useAuth';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrders, setMyOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/myOrders/${user.displayName}`)
    .then(res=> res.json())
    .then(data => setMyOrders(data));
    },[])

    // console.log(myOrders);
    const deleteMyOrder = (id) =>{
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
             const restOrder = myOrders.filter(myOrder =>myOrder._id !== id);
             setMyOrders(restOrder);
         });
        }
        else{
            return;
        }
    }



    

    return (
        <div className='text-center container ng-success text-white pt-5'>
            <div className='container row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1'>
                {
                    myOrders.map(myOrder =>
                        <div className="col" key={myOrder._id}>
                        <div className="card">
                          
                          <div className="card-body">
                            <h5 className="card-title">User: {myOrder.userName}</h5>
                            <p className="card-text">Travel Country: {myOrder.country}</p>
                            <p className="card-text">Capital: {myOrder.capital}</p>
                            <h3 className="card-text">Status: {myOrder.orderStatus}</h3>
                            <button className='btn btn-danger px-3 mt-4 ' onClick={()=> deleteMyOrder(myOrder._id)}>Delete</button>
                          </div>
                        </div>
                      </div>
                        )
                }

            </div>
            
        </div>
    );
};

export default MyOrders;