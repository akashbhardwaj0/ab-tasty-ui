import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../features/CartSlice";
import { FaStar } from "react-icons/fa"; // For rating icon

const buttonClass = 'cursor-pointer text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-xs px-4 py-2 transition duration-300 transform hover:scale-105';

const FoodCard = (props) => {
  const { img, name, rating, price, desc, id, handleToast } = props;
  const dispatch = useDispatch();

  return (
    <div className="p-4 w-[250px] bg-white flex flex-col border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img
        className="rounded-full h-32 w-32 object-cover mx-auto mt-2 border-4 border-orange-500 transition-transform duration-500 ease-in-out hover:scale-110"
        src={img}
        alt={name}
      />
      <div className="px-3 pb-3 mt-3 flex flex-col items-center">
        <h5 className="text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 text-center mb-1">{name}</h5>
        
        <div className="flex justify-center items-center mb-2">
          <span className="text-lg font-bold text-orange-600 bg-orange-100 rounded-lg px-3 py-1 border border-orange-500 shadow-md">
            ₹{price}
          </span>
        </div>

        <p className="text-sm text-gray-600 mt-1 text-center">{desc ? (desc.length > 50 ? `${desc.slice(0, 50)}...` : desc) : "No description available."}</p>

        <div className="flex justify-between items-center mt-4 w-full">
          <span className="flex items-center bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded">
            <FaStar className="text-yellow-500 mr-1" /> {rating}
          </span>
          <a onClick={() => {
            dispatch(addToCart({
              id, name, rating, price, img, quantity: 1
            }));
            handleToast(name);
          }} className={buttonClass}>
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
