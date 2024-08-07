import React from 'react'
import axios from 'axios';

export default function sellercard({item}) {
    const handleRemove = async () => {
        try {
          const response = await axios.delete(`http://localhost:8000/sellerdelete/${item._id}`);
          console.log(response.data);
          onRemove(item._id); 
        } catch (error) {
          console.error("Error deleting the book:", error);
        }
      };
      
  return (
    <>
          <div className=" bg-base-100 my-2 shadow-xl px-3 py-2 rounded-md">
            <div className=" flex justify-between ">
             <div>
              <h1 className="font-bold text-xl">Sellername : {item.name}</h1>
              <h2>Email id : {item.email}</h2>
              </div>
              <div className=" justify-end">
                <button onClick={handleRemove} className=" bg-purple-500 px-3 py-2 text-white rounded-md">Remove</button>
              </div>
            </div>
          </div>
    </>
  )
}
