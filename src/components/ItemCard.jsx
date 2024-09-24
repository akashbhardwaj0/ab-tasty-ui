import React, { useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity} from '../features/CartSlice';
import toast, { Toaster } from 'react-hot-toast';

const ItemCard = (props) => {
  const {id, img, name, rating, price, quantity} = props;
 const dispatch = useDispatch();

  return (
    <div className='p-2 border rounded shadow-md'>
    <div className='flex justify-between items-center'>
      <img src={img} alt={name} className='rounded-full h-10 w-10 object-cover' />
      <div className='flex justify-between items-center'>
        <h3 className='font-semibold mx-2'>{name}</h3>
        <MdDelete onClick={()=>{
          dispatch(removeFromCart({id, name}))
          toast(`${name} Removed from cart`, {
            icon: '👏',
          });
        }} className='text-red-500 hover:text-red-700 cursor-pointer'/>
      </div>
    </div>
    <div className='flex justify-between items-center mt-1'>
      <span className='text-gray-500'> ₹{price}</span>
      <div className='flex items-center'>
      <AiOutlineMinusCircle className='cursor-pointer' onClick={()=>dispatch(decreaseQuantity({id, name}))}/>
      <span className='mx-2'>{quantity}</span>
        <AiOutlinePlusCircle onClick={()=>{
            dispatch(addToCart({
              id, name, rating, price, img, quantity: 1
            }))
          }} className='cursor-pointer' />  
      </div>
    </div>
  </div>
  );
}

export default ItemCard;
