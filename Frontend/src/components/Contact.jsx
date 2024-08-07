import React from 'react'

import { useForm } from "react-hook-form"
import Navbar from './Navbar'

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <div className='m-20'>
        <div className='flex h-full items-center justify-center'>
    <div className="cursor-default border shadow-md px-10 pt-6 rounded-lg">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex justify-between'>
        
        <h1 className="font-extrabold  text-2xl text-pink-600">Contact us</h1>
        </div>
        <div>
            <p className='py-2 mt-5 '>Name</p>
            
            <input type="text" placeholder='enter your Name' className='w-80 px-3 py-2 border rounded-md' {...register("name", { required: true })} />
            <br />
                {errors.name && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-5 '>Email</p>
            <input type="email" placeholder='enter your email' className='w-80 px-3 py-2 border rounded-md' {...register("email", { required: true })} />
            <br />
                {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='mt-5 py-2 '>Message</p>
            <textarea name="" id="" cols="30" rows="5" placeholder='enter your message' className='w-80 px-3 py-2 border rounded-md '  {...register("message", { required: true })}/>
            
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
    </>
  )
}
