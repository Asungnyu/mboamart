import React from "react";
import Header from "../common/Header";
import HeroBanner from "../components/HeroBanner";
import CategoryFilter from "../components/CategoryFilter";
import LandingAbout from "../components/LandingAbout";
import Footer from "../common/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 p-2 max-w-8xl mx-auto">
      <Header />
      <HeroBanner />
      <CategoryFilter />
      <LandingAbout />
      <Footer />
    </div>
  );
};

export default Home;
