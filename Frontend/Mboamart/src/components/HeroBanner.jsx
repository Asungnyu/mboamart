import React from "react";
import Button from "./CustomButton";

const HeroBanner = () => {
  return (
    <section className="w-full bg-white dark:bg-[#AEB7B3] py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
      {/* Left Text Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          No Traffic. No Wahala. Just MboaMart.
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
          Discover cutting-edge tools, beautiful designs, and everything you
          need to bring your ideas to life. Let's build something amazing
          together.
        </p>
        <Button
          route="/getstarted"
          text="Get Started"
          variant="secondary"
          as="option"
        />
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-md">
        <img
          src="/public/images/hero-banner.png"
          alt="Hero Banner Visual"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
