import React from 'react';
import heroImg1 from "../assets/images/hero-img1.jpg";

const HeroSection = ({ foodItemsRef }) => {
  const scrollToFoodItems = () => {
    if (foodItemsRef.current) {
      foodItemsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex items-center justify-center py-12 px-6 lg:px-16 bg-gradient-to-r from-yellow-200 to-orange-300">
      <div className="absolute inset-0">
        <img
          src={heroImg1}
          alt="Delicious Food"
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      <div className="relative z-10 text-center lg:text-left lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-orange-800 drop-shadow-2xl">
          Taste the Difference
        </h1>
        <p className="text-lg lg:text-xl mb-6 text-orange-800 drop-shadow-lg">
          Discover the finest flavors and enjoy a culinary journey with us. Your next meal is just a click away.
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button
            onClick={scrollToFoodItems}
            className="bg-white text-orange-600 rounded-lg shadow-md px-5 py-2 hover:bg-orange-100 transition duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
