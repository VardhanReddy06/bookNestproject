import React, { useState,useEffect } from 'react'
export default function Cartnav() {
    const [sticky,setSticky]=useState(false);
    useEffect(()=>{
        const handleScroll=()=>{
               if(window.scrollY >0){
                setSticky(true);
               }
               else{
                setSticky(false);
               }
              
        };
        window.addEventListener("scroll",handleScroll)
        return()=>{window.removeEventListener("scroll",handleScroll)};
    },[]);
  return (
    <div className= {` fixed top-0 left-0 right-0 z-50${sticky
    ?"sticky-navbar bg-base-500 shadow-md duration-200 transition-all ease-in-out"
    : ""
    }`} >
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="/">Home</a></li>
                <li><a><img src = {trolley}/></a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">Booknest</a>
        </div>
        <div className=' navbar-end'>
        {/* nav items */}
        <div className="  hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">
            <li><a href="/">Home</a></li>
            <li><a href='/Cart'><img src = {trolley} height = '25'  width= '25'/></a></li>
            </ul>
            
        </div>
        <div>
        <button><a className=" bg-black px-3 py-2 rounded-md text-white" onClick={()=>{
            document.getElementById('my_modal_3').showModal()
        }} >Login </a>
        <Login/>
        </button>
        
        </div>
        </div>
        </div>
    </div>
  )
}