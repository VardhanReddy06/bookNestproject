import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

export default function UserSignup() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      const response = await fetch(`http://localhost:8000/usersignup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if(response.status===400){
          alert("user already exits")
      }
      
      
      const result = await response.json();
      console.log("Success:", result);
      navigate("/")
      // Handle success - you can redirect, show a success message, etc.
    } catch (error) {
      console.log("Error:", error);
      // Handle error - show an error message, etc.
    }

  };
  
  return (
    <div>
      <div className='flex h-screen items-center justify-center'>
    <div className="cursor-default border shadow-md p-6 rounded-lg">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex justify-between'>
        <h3 className="font-bold text-lg">User Signup</h3>
        <Link to='/' className="btn btn-sm btn-circle btn-ghost ">✕</Link>
        </div>
        <div>
            <p className='py-2 mt-7 '>Name</p>
            
            <input type="text" placeholder='enter your Name' className='w-80 px-3 py-2 border rounded-md' {...register("name", { required: true })} />
            <br />
                {errors.name && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='py-2 mt-7 '>Email</p>
            <input type="email" placeholder='enter your email' className='w-80 px-3 py-2 border rounded-md' {...register("email", { required: true })} />
            <br />
                {errors.email && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div>
            <p className='mt-9 py-2 '>Password</p>
            
            <input type="password" placeholder='enter your password' className='w-80 px-3 py-2 border rounded-md' {...register("password", { required: true })} />
            <br />
                {errors.password && <span  className='text-sm text-red-500'>This field is required</span>}
        </div>
        <div className='flex flex-row justify-evenly m-6'>
        <button className='px-3 py-2  bg-pink-600 rounded-md text-white hover:bg-pink-700 duration-200'>Sign up</button>
        <Link to='/' className='px-3 py-2 '>Already Registered? <span className='underline text-blue-500 cursor-pointer' >Login</span></Link>
        
        </div>
        </form>
        
    </div>
    </div>
    </div>
  )
}





