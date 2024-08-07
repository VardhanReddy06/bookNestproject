import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellerNavbar from './SellerNavbar';
import Sellerbookcard from './Sellerbookcard';

function SellerBooks() {
  const [sellerbooks, setSellerbooks] = useState([]);
  const id = localStorage.getItem("sellerid");

  useEffect(() => {
    axios.get(`http://localhost:8000/seller/getbooks/${id}`)
      .then(response => {
        setSellerbooks(response.data);
        console.log(sellerbooks)
      })
      .catch(error => {
        console.error("Error fetching the books:", error);
      });
  }, []);

  const handleRemove = (orderId) => {
    setSellerbooks(sellerbooks.filter(item => item._id !== orderId));
  };
  

  return (
    <>
      <SellerNavbar/>
      <div>
        {sellerbooks.map((item) => (
          <Sellerbookcard key={item._id} item={item} onRemove={handleRemove} />
        ))}
      </div>
    </>
  );
}

export default SellerBooks;
