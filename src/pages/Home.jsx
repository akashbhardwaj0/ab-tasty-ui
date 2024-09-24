import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItems from '../components/FoodItems';
import HeroSection from '../components/HeroSection';
import Cart from '../components/Cart';

export default function Home() {
  const foodItemsRef = useRef(null); // Create a ref for the FoodItems section

  return (
    <div>
      <Navbar />
      <HeroSection foodItemsRef={foodItemsRef} /> {/* Pass the ref to HeroSection */}
      <CategoryMenu />
      <FoodItems ref={foodItemsRef} /> {/* Attach the ref to FoodItems */}
      <Cart/>
    </div>
  );
}
