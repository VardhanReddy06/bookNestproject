import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './Cards';

function Freebook() {
  const [book,setBook]=useState([])
  useEffect(()=>{
    const fetchBooks = async () => {
    try{
      const books = await axios.get("http://localhost:8000/allbooks");
      const freebooks = books.data.filter(book => book.price=='0');
      setBook(freebooks)
    }
    catch(err){
      console.log("error"+err)
    }
  }
  fetchBooks();
  },[])
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div className='max-w-screen-2x1 container mx-auto md:px-20 px-4'>
    <div >
        <h1 className="font-semibold text-xl pb-2 ">Free Books</h1>
        <p>All your free books are available in this section</p>
    </div>
    <div>
    <Slider {...settings}>
    {book.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
    </Slider>
    </div>
    </div>
    </>
  )
}


export default Freebook