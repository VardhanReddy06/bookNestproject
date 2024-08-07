import React from 'react'
import SellerNavbar from './SellerNavbar'
import SellerFooter from './SellerFooter'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {Chart as ChartJS} from "chart.js/auto"
import {Bar} from 'react-chartjs-2'
export default function Sellerhome() {
  const [users,setUsers]=useState([]);
  const [orders,setOrders]=useState([]);
  const [seller,setSeller]=useState([]);
  const sellerid = localStorage.getItem("sellerid")

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
        axios.get(`http://localhost:8000/seller/getorders/${sellerid}`)
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
    <SellerNavbar/>
    <div className='p-10 my-20 mx-30 h-100 w-200'>
    <Bar
        data = {{
          labels :["STATS"],
          datasets:[{
            label:["user"],
            data:[usercount],
            backgroundColor:["cyan"],
            barThickness: 50,
            borderWidth:3,
            borderRadius:5,
          },
          {
            label:["Orders"],
            data:[orderscount],
            backgroundColor:["lightyellow"],
            barThickness: 50,
            borderWidth:3,
            borderRadius:5,
          },
          
        
          ],
        }}
      />
    </div>
    <SellerFooter/>
    </>
  )
}
