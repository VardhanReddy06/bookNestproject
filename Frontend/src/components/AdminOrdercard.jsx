import React from 'react'
import axios from 'axios';

export default function AdminOrdercard({item,onRemove}) {
    console.log(item)
    const handleRemove = async () => {
        try {
          const response = await axios.delete(`http://localhost:8000/orderdelete/${item._id}`);
          console.log(response.data);
          onRemove(item._id); 
        } catch (error) {
          console.error("Error deleting the order:", error);
        }
      };
  return (
    <>
          <div className="bg-base-100 my-2 shadow-xl px-3 py-2 rounded-md">
            <div className='flex justify-around '>
                <figure>
                <img className='w-20'
                    src={item.book.imageurl}
                    alt="Book" />
                </figure>
                <div >
                <h2 className="text-xl font-bold">Book Name : <span className='text-xl font-semibold'>{item.book.name}</span></h2>
                <h2 className="text-lg font-semibold">User Name : <span className='text-lg font-medium'>{item.user.name}</span></h2>
                <h2 className="text-lg font-semibold">Seller Name : <span className='text-lg font-medium'>{item.seller.name}</span></h2>
                <h2 className="text-lg font-semibold">Address : <span className='text-lg font-medium'>{item.address},{item.City},{item.pincode}</span></h2>
                </div>
                <div className=" justify-end">
                    <button onClick={handleRemove} className=" bg-yellow-500 px-3 py-2 text-white rounded-md">Remove</button>
                </div>
                </div>
          </div>
        </>
  )
}
