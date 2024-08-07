import React from 'react'
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  const id = localStorage.getItem("id")
  return (
    <>
    <Navbar />
    <Banner/>
    <Freebook/>
    <Footer />
    </>
  );
}

export default Home
