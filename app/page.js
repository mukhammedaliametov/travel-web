'use client'
import React from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import About from '@/pages/About';

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default page;