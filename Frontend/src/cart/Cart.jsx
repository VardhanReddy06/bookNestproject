import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cartcard from '../components/Cartcard';
import Navbar from '../components/Navbar';

function Cart() {
  const [cartbooks, setCartbooks] = useState([]);
  const id = localStorage.getItem("id");

  useEffect(() => {
    axios.get(`http://localhost:8000/getorders/${id}`)
      .then(response => {
        setCartbooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching the books:", error);
      });
  }, [id]);

  const handleRemove = (orderId) => {
    setCartbooks(cartbooks.filter(item => item._id !== orderId));
  };
  

  return (
    <>
      <Navbar />
      <div>
        {cartbooks.map((item) => (
          <Cartcard key={item._id} item={item} onRemove={handleRemove} />
        ))}
      </div>
    </>
  );
}

export default Cart;
