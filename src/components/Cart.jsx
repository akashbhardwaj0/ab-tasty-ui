import React, { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";
import ItemCard from './ItemCard';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, totalQty, totalPrice } = useSelector((state) => state.cartData);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();
  
  const handleCart = () => setCartOpen(!cartOpen);

  return (
    <div>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] border h-full bg-white shadow-lg ${cartOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-500 z-50 p-5`}>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-bold text-orange-500'>My Orders</span>
          <IoCloseOutline className="border-2 border-orange-500 text-orange-500 font-bold text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" onClick={handleCart} />
        </div>
        {cart.length === 0 ? (
          <div className='text-center text-gray-500'>Your cart is empty.</div>
        ) : (
          cart.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              rating={item.rating}
              price={item.price}
              desc={item.desc}
              quantity={item.quantity}
            />
          ))
        )}
        <div className='absolute bottom-0 mb-5'>
          <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: {totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] my-2' />
          <button onClick={()=>navigate("/success")} className="text-white lg:w-[17vw] w-[90vw] bg-orange-500 hover:bg-orange-600 rounded-lg text-xs px-3 py-1 transition duration-300 transform hover:scale-105">CheckOut</button>
        </div>
      </div>
      {
        cartOpen ? null : (
          <CiShoppingCart
            className={`rounded-full bg-orange-500 text-white shadow-lg text-5xl p-3 fixed bottom-4 right-4 cursor-pointer hover:bg-orange-600 transition duration-300 transform ${totalQty > 0 ? "animate-bounce delay-500" : ""}`}
            onClick={handleCart}
          />
        )
      }
    </div>
  );
}

export default Cart;
