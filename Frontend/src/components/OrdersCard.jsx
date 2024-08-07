import React from 'react'

export default function OrdersCard({item}) {
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
              <p>Order Placed</p>
              
            </div>
          </div>
        </>
  )
}
