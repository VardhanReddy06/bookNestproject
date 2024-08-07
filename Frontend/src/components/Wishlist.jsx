import Navbar from './Navbar';
import Wishcard from './Wishcard';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Wishlist() {
    const [wishbooks, setWishbooks] = useState([]);
    const id = localStorage.getItem("id");
  
    useEffect(() => {
      axios.get(`http://localhost:8000/wishlist/${id}`)
        .then(response => {
          setWishbooks(response.data);
        })
        .catch(error => {
          console.error("Error fetching the books:", error);
        });
    }, [id]);
  
    const handleRemove = (orderId) => {
      setWishbooks(wishbooks.filter(item => item._id !== orderId));
    };
  
    return (
      <>
        <Navbar />
        <div>
          {wishbooks.map((item) => (
            <Wishcard key={item._id} item={item} onRemove={handleRemove} />
          ))}
        </div>
      </>
    );
  }


export default Wishlist
