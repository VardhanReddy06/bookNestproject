import React from 'react'
import AdminNavbar from './AdminNavbar'
import AdminFooter from './AdminFooter'
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function AdminHome() {

  const [users,setUsers]=useState([]);
  const [orders,setOrders]=useState([]);
  const [seller,setSeller]=useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/ausers`)
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error("Error fetching the Users:", error);
          });
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:8000/aorders`)
          .then(response => {
            setOrders(response.data);
          })
          .catch(error => {
            console.error("Error fetching the Orders:", error);
          });
      }, []);

    useEffect(() => {
        axios.get(`http://localhost:8000/asellers`)
          .then(response => {
            setSeller(response.data);
          })
          .catch(error => {
            console.error("Error fetching the Seller:", error);
          });
      }, []);
    const usercount=users.length;
    const sellercount=seller.length;
    const orderscount=orders.length;
    console.log(usercount)
    console.log(sellercount)
    console.log(orderscount)


  return (
    <>
    <AdminNavbar/>
    <div className='mt-20 mb-10'>
      <h1 className='font-semibold text-center text-3xl'>Your <span className=' italic font-bold text-pink-600 font-sans text-4xl  '>Booknest!!</span></h1>
     </div>
    <div className='flex justify-evenly mx-10'>
      
      <div className='bg-base-100 h-60 bg-base-100 border border-orange-600 rounded-md w-1/3 m-4 py-5 text-center'><span className='text-3xl font-extrabold font-serif'>User</span>
      <h2 className='mt-14 font-semibold'>No.Of Users : <span className='text-bold'>{usercount}</span></h2>
      </div>
      <div className='bg-base-100 h-60 bg-base-100 border border-pink-600 rounded-md w-1/3 m-4 py-5 text-center'><span className='text-3xl font-extrabold font-serif'>Seller</span>
      <h2 className='mt-14 font-semibold'>No.Of Sellers : <span className='text-bold'>{sellercount}</span></h2>
      </div>
      <div className='bg-base-100 h-60 bg-base-100 border border-purple-600 rounded-md w-1/3 m-4 py-5 text-center'><span className='text-3xl font-extrabold font-serif'>Orders</span>
      <h2 className='mt-14 font-semibold'>Total No.Of Orders : <span className='text-bold'>{orderscount}</span></h2>
      </div>
    </div>
    <AdminFooter/>
    </>
  )
}
