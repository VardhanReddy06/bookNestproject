import React, { useState ,useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios';
import Sellercard from '../components/Sellercard';


export default function Adminseller() {
    const [seller,setSeller]=useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/asellers`)
          .then(response => {
            setSeller(response.data);
          })
          .catch(error => {
            console.error("Error fetching the Seller:", error);
          });
      }, []);
      const handleRemove = (sellerId) => {
        setSeller(users.filter(item => item._id !== sellerId));
      };


  return (
    <>
    <AdminNavbar/>
    <div className='m-20'>
     {seller.map((item) => (
            <Sellercard key={item._id} item={item} onRemove={handleRemove} />
          ))}
     </div>
    </>
  )
}
