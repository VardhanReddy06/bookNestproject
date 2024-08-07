import React from 'react';
import axios from 'axios';
import PlaceOrder from './PlaceOrder';
import { useState } from 'react';

function Cartcard({ item, onRemove }) {
  const [showPlaceOrder, setShowPlaceOrder] = useState(false);


  const handleRemove = async () => {
    try {
      const response = await axios.delete(`http://localhost:8000/deletebook/${item._id}`);
      console.log(response.data);
      onRemove(item._id); 
    } catch (error) {
      console.error("Error deleting the book:", error);
    }
  };

  
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl mx-20 my-20 px-4 py-5 p-5 h-100">
        <figure>
          <img className='w-20'
            src={item.book.imageurl}
            alt="Book" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.book.name}</h2>
          <p>Item is in your cart</p>
          <div className="card-actions justify-end">
            <button className='btn btn-secondary' 
            onClick={() => setShowPlaceOrder(true)}>Place Order
            </button>
            
            
            <button onClick={handleRemove} className="btn btn-primary">Remove</button>
          </div>
        </div>
      </div>
      {showPlaceOrder && (
        <div id="finalorders">
          <PlaceOrder item={item} onRemove={handleRemove} />
        </div>)}
    </>
  );
}

export default Cartcard;
