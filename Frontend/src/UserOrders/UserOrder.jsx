import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar'
import OrdersCard from '../components/OrdersCard';

export default function UserOrder() {
    const [orders,setorders]=useState([]);
    const id = localStorage.getItem("id");
  
    useEffect(() => {
      axios.get(`http://localhost:8000/getuserorders/${id}`)
        .then(response => {
          setorders(response.data);
        })
        .catch(error => {
          console.error("Error fetching the books:", error);
        });
    }, [id]);
  return (
    <>
    <Navbar/>
    <div>
      <div>
      {orders.map((item) => (
            <OrdersCard key={item._id} item={item}  />
          ))}
      </div>
    </div>
    </>
  )
}
