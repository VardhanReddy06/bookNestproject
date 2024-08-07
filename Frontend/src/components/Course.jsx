import React, { useState, useEffect } from 'react';
import Cards from './Cards';
import axios from 'axios';

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/allbooks")
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => {
        console.error("Error fetching the books:", error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <>
      <div className='mt-20'>
        <h1 className='font-semibold text-center text-3xl'>We're Happy to welcome you to our <span className=' italic font-bold text-pink-600 font-sans text-4xl'>Booknest!!</span></h1>
        <h2 className='font-semibold text-center text-l m-10'>Discover your next great read and immerse yourself in a world of literature at BookNest. We celebrate the joy of reading and provide a haven for every book lover. Explore our curated collection, insightful reviews, and find books that will captivate your heart and mind. Happy reading!</h2>
      </div>
      
      <div className='grid grid-cols-4 m-12'>
        {books.map((item) => (
          <Cards key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Course;
