import React from 'react'
import Header from './Header'
import HeroBanner from './HeroBanner'
import CategoryFilter from './CategoryFilter'
import LandingAbout from './LandingAbout'
import Footer from './Footer'


const Home = () => {
  return (
    <div className="flex flex-col gap-8 p-6 max-w-7xl mx-auto">
      <Header />
      <HeroBanner />
      <CategoryFilter />
      <LandingAbout />
      <Footer />
    </div>
  );
};
  

export default Home