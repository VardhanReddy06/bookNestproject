import React, { useState, useEffect } from 'react';
import Login from './Login';
import trolley from '../assets/trolley.png';
import wishlist from '../assets/wishlist.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');

    const storedUsername = localStorage.getItem('name');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('name');
    localStorage.removeItem('id')
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 px-10 ${
          sticky
            ? 'sticky-navbar bg-base-500 shadow-md duration-200 transition-all ease-in-out'
            : ''
        }`}
      >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a>
                    <img src={trolley} alt="trolley" />
                  </a>
                </li>
                <li>
                  <a>
                    <img src={wishlist} alt="wishlist" height="25" width="25" />
                  </a>
                </li>
                <li>
                  <a href="/course">Genre</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Booknest</a>
            {isLoggedIn ? <p className='bg-black px-3 py-2 rounded-md text-white'>WELCOME: {username}</p> : <p>GUEST</p>}
          </div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/course">Books</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/Cart">
                    <img src={trolley} alt="trolley" height="25" width="25" />
                  </a>
                </li>
                <li>
                  <a href='/wishlist'>
                    <img
                      src={wishlist}
                      alt="wishlist"
                      height="25"
                      width="25"
                    />
                  </a>
                </li>
                <li>
                  <a href="/userorders">Orders</a>
                </li>
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
                  <Login />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
