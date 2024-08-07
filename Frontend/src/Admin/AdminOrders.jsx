import React, { useState ,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import OrdersCard from '../components/OrdersCard';
import AdminOrdercard from '../components/AdminOrdercard';



export default function AdminOrders() {
    const [orders,setOrders]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/aorders`)
          .then(response => {
            setOrders(response.data);
            console.log(orders)
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
    <AdminNavbar/>
    <div className='m-20'>
     {orders.map((item) => (
            <AdminOrdercard key={item._id} item={item} onRemove={handleRemove} />
          ))}
     </div>
    </>
  )
}
