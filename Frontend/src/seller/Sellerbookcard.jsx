import React from 'react'
import axios from 'axios';

export default function Sellerbookcard({item , onRemove}) {

    const handleRemove = async () => {
        try {
          const response = await axios.delete(`http://localhost:8000/seller/deletebook/${item._id}`);
          console.log(response.data);
          onRemove(item._id); 
        } catch (error) {
          console.error("Error deleting the book:", error);
        }
      };

  return (
    <>
      <div className='mt-4 my-20 p-20 h-50'>
        <div className="card bg-base-100 w-92 shadow-xl">
          <figure>
            <img className='h-60' src={item.imageurl} alt="Book" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}         
            </h2>
            <p><b>BOOK OF WISDOM</b></p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              
              <div>
                <button
                  className="badge badge-outline cursor-pointer hover:bg-pink-500 hover:text-white px-2 py-1 p-2 duration-200"
                  onClick={handleRemove}
                >
                  Delete Book
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
