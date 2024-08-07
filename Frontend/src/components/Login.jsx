import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
    

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="w-max h-max rounded-xl">
   
        <div className=" px-20 py-10  cursor-default">
            <form method="dialog">
                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>

            <div className='m-4 space-x-4'>
            <Link to='/userlogin' className=" bg-green-400 px-6 py-2 rounded-md text-white ">User</Link>
              <Link to='/sellerlogin' className=" bg-red-400 px-6 py-2 rounded-md text-white">Seller</Link>
              <Link to='/adminlogin' className=" bg-blue-400 px-6 py-2 rounded-md text-white">Admin</Link>
            </div>
            
            

           
        </div>
        </dialog>
    
    </div>

        
        
    </>
  )
}
