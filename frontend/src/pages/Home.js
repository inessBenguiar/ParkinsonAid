import React from 'react';
import Header from '../components/Header';  // One level up to access the components directory
import Navbar1 from '../components/Navbar1';
import BeginSection from '../components/BeginSection';
import HowSection from '../components/HowSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar1 />
      <Header />
      <BeginSection />
      <HowSection />
      <Footer />
    </div>
  );
};

export default Home;