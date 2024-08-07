import React from 'react'

import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import SellerNavbar from './SellerNavbar'
import SellerFooter from './SellerFooter'
import { useNavigate } from 'react-router-dom'

export default function Addbooks() {
    const id = localStorage.getItem("sellerid")
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const bookData = {
            name: data.BookName,
            author:data.Author,
            seller: id,
            genre : data.BookDescription,
            price : data.Price,
            imageurl : data.BookImgURL
          };
        const response = await fetch('http://localhost:8000/addbooks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookData),
        });
        const result = await response.json();
        navigate('/MYbook')
        console.log(result);
    };
  return (
    <>
    <SellerNavbar/>
    <div className='my-20'>
        <div className='flex h-full items-center justify-center'>
    <div className="cursor-default border shadow-md px-10 pt-6 rounded-lg">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex justify-between'>
        
        <h1 className="font-extrabold  text-2xl text-pink-600">Book Details</h1>
        
        </div>
        <div>
            <p className='py-2 mt-5 '>BookName</p>
            
            <input type="text" placeholder='enter your Book Name' className='w-80 px-3 py-2 border rounded-md' {...register("BookName", { required: true })} />
            <br />
                {errors.name && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-5 '>Author</p>
            <input  placeholder='enter Author Name' className='w-80 px-3 py-2 border rounded-md' {...register("Author", { required: true })} />
            <br />
                {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-5 '>BookImgURL</p>
            <input  placeholder='enter BookImgURL' className='w-80 px-3 py-2 border rounded-md' {...register("BookImgURL", { required: true })} />
            <br />
                {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-5 '>Price</p>
            <input  placeholder='enter Book PRICE' className='w-80 px-3 py-2 border rounded-md' {...register("Price", { required: true })} />
            <br />
                {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='mt-5 py-2 '>Genre</p>
            <input name="" id="" cols="30" rows="5" placeholder='enter your Book Gener' className='w-80 px-3 py-2 border rounded-md '  {...register("BookDescription", { required: true })}/>
            
            <br />
                {errors.message && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex flex-row justify-evenly m-6'>
        <button className='px-3 py-2  bg-blue-500 rounded-md text-white hover:bg-blue-600 duration-200'>Submit</button>
        
        
        </div>
        </form>
        
    </div>
    </div>
    </div>
    <SellerFooter/>
    </>
  )
}
