import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

export default function PlaceOrder({item,onRemove}) {
  const userId = localStorage.getItem('id');

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    console.log(userId)
    const orderData = {
        user: userId,
        book: item.book._id,
        seller:item.seller._id,
        pincode:data.pincode,
        address:data.address,
        City:data.City
      };
    try {
      const response = await fetch(`http://localhost:8000/adduserorder`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData)
      });
      console.log(response)
      const result = await response.json();
  
      console.log("Success:", result);
      alert('order placed')
      navigate("/userorders")
      onRemove(item._id)
    } catch (error) {
      console.log("Error:", error);
    }

  };
  
  return (
    <div>
      <div  id='finalorders' className='flex h-screen items-center justify-center'>
    <div className="cursor-default border shadow-md p-6 rounded-lg">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex justify-between'>
        <h3 className="font-bold text-lg">Order Details</h3>
        <Link to='/' className="btn btn-sm btn-circle btn-ghost ">✕</Link>
        </div>
        <div>
            <p className='py-2 mt-7 '>ADDRESS</p>
            
            <input type="text" placeholder='enter your address' className='w-80 px-3 py-2 border rounded-md' {...register("address", { required: true })} />
            <br />
                {errors.address && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-7 '>City</p>
            <input type="text" placeholder='enter your city' className='w-80 px-3 py-2 border rounded-md' {...register("City", { required: true })} />
            <br />
                {errors.City && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='mt-9 py-2 '>PINCODE</p>
            
            <input type="text" placeholder='enter your pincode' className='w-80 px-3 py-2 border rounded-md' {...register("pincode", { required: true })} />
            <br />
                {errors.pincode && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex flex-row justify-evenly m-6'>
        <button type='submit' className='px-3 py-2 bg-pink-600 rounded-md text-white hover:bg-pink-700 duration-200'>Buy Now</button>
        
        
        </div>
        </form>
        
    </div>
    </div>
    </div>
  )
}





