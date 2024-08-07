import React from 'react'
import SellerNavbar from './SellerNavbar';
import AdminOrdercard from '../components/AdminOrdercard';
import { useState,useEffect } from 'react';
import axios from 'axios';

function Sellerorders() {
  const [orders,setOrders]=useState([]);
    const sellerid = localStorage.getItem("sellerid")
    useEffect(() => {
      axios.get(`http://localhost:8000/seller/getorders/${sellerid}`)
        .then(response => {
          setOrders(response.data);
          console.log(orders);
        })
        .catch(error => {
          console.error("Error fetching the Orders:", error);
        });
    }, []);
      const handleRemove = (orderId) => {
        setOrders(orders.filter(item => item._id !== orderId));
      };
  return (
    <>
      <SellerNavbar/>
    <div className='m-20'>
     {orders.map((item) => (
            <AdminOrdercard key={item._id} item={item} onRemove={handleRemove} />
          ))}
     </div>
    </>
  )
}

export default Sellerorders
