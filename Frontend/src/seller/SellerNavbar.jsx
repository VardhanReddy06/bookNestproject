import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SellerNavbar() {

    const [sticky,setSticky]=useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();
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
    useEffect(() => {
      const loginStatus = localStorage.getItem('issellerLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
  
      const storedUsername = localStorage.getItem('sellername');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('issellerLoggedIn');
      localStorage.removeItem('sellername');
      localStorage.removeItem('sellerid')
      setIsLoggedIn(false);
      alert('Logged out successfully');
      navigate('../');
    };

  return (
    <div className= {` fixed top-0 left-0 right-0 z-50 px-10 ${sticky
    ?"sticky-navbar bg-base-500 shadow-md duration-200 transition-all ease-in-out"
    : ""
    }`} >
      <div className="navbar bg-base-100 ">
        <div className="navbar-start ">
            <a className="btn btn-ghost text-xl">Booknest</a>
            {isLoggedIn ? <p className='bg-black px-3 py-2 rounded-md text-white'>WELCOME: {username}</p> : <p>GUEST</p>}
        </div>
        <div className=' navbar-end'>
        {/* nav items */}
        <div className="  hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a href="/sellerhome">Dashboard</a></li>
            <li><a href='/Mybook'>My Books</a></li>
            <li><a href="/addbook">Add Book</a></li>
            <li><a href='/sellerorders'>Orders</a></li>
            </ul>
            
        </div>
        <div>
        {isLoggedIn ? (
                <button
                  className="bg-black px-3 py-2 rounded-md text-white"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-black px-3 py-2 rounded-md text-white"
                  onClick={() => {
                    document.getElementById('my_modal_3').showModal();
                  }}
                >
                  Login
                </button>
              )}     
        </div>
        </div>
        </div>
    </div>
  )
}