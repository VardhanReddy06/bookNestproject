import React from 'react'
import Home from './home/Home';
import { Route, Routes } from "react-router-dom"
import Courses from './courses/Courses.jsx';
import Contact from './components/Contact.jsx';
import SellerLogin from './components/SellerLogin.jsx';
import SellerSignup from './components/SellerSignup.jsx';
import Adminlogin from './components/Adminlogin.jsx';
import UserSignup from './components/UserSignup.jsx';
import Sellerhome from './seller/Sellerhome.jsx';
import AdminHome from './Admin/AdminHome.jsx';
import Cart from '../src/cart/Cart.jsx';
import Addbooks from './seller/Addbooks.jsx';
import SellerBooks from './seller/SellerBooks.jsx';
import Userlogin from './components/Userlogin.jsx';
import Login from './components/Login.jsx';
import Wishlist from './components/Wishlist.jsx';
import UserOrder from './UserOrders/UserOrder.jsx';
import PLaceOrder from './components/PlaceOrder.jsx';
import Adminusers from './Admin/Adminusers.jsx';
import Adminseller from './Admin/Adminseller.jsx';
import AdminOrders from './Admin/AdminOrders.jsx';
import Sellerorders from './seller/Sellerorders.jsx';

function App() {
  return (
    <>
      
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path="/course" element = {<Courses />} />
        <Route path="/usersignup" element = {<UserSignup/>} />
        <Route path="/contact" element = {<Contact/>} />
        <Route path="/sellerlogin" element = {<SellerLogin/>} />
        <Route path="/sellersignup" element = {<SellerSignup/>} />
        <Route path="/adminlogin" element = {<Adminlogin/>} />
        <Route path="/sellerhome" element = {<Sellerhome/>} />
        <Route path="/adminhome" element = {<AdminHome/>} />
        <Route path="/cart" element = {<Cart/>}/>
        <Route path="/addbook" element = {<Addbooks/>}/>
        <Route path="/MYbook" element = {<SellerBooks/>}/>
        <Route path="/userlogin" element = {<Userlogin/>}/>
        <Route path="/wishlist" element = {<Wishlist/>}/>
        <Route path="/userorders" element = {<UserOrder/>}/>
        <Route path="/placeorder" element = {<PLaceOrder/>}/>
        <Route path="/adminusers" element = {<Adminusers/>}/>
        <Route path="/adminsellers" element = {<Adminseller/>}/>
        <Route path="/adminorders" element = {<AdminOrders/>}/>
        <Route path="/sellerorders" element = {<Sellerorders/>}/>
        

      </Routes>
    </>
  );
}

export default App
