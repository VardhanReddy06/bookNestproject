import React from 'react'
import cover from '../../public/cover.png'
function Banner() {
  return (
    <>
    <div className='flex mt-16 mx-20'>
       <div className='w-1/2 mt-28 font-serif font-size:20px text-2xl'><p className='text-3xl'>Welcome to <span className=' italic font-bold text-pink-600 font-sans'>BookNest</span>,</p><br /><p>Your cozy corner of the internet for book lovers and avid readers. Dive into a world where every page is an adventure, every story evokes new emotions, and every book finds its perfect home.</p></div>
    <div className=' w-1/2'><img className='w-200 h-200'  src={cover}></img> </div>
    </div>
    
    </>
  )
}

export default Banner
