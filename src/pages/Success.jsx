import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";

export default function Success() {
  const [loading, setLoading] = useState(true);
  const { cart, totalQty, totalPrice } = useSelector((state) => state.cartData);
  console.log("cart data", cart);

  useEffect(() => {
   setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50">
      {loading ? (
        <PropagateLoader color="#ed541d" />
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-orange-600 mb-2">
            Order Successful.
          </h2>
          <p className="text-gray-700 text-center">
            Your order has been successfully placed! 🎉
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Order Summary:</h3>
            <ul className="mt-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between py-1">
                  <span>{item.name} (Qty: {item.quantity})</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <hr className="my-2" />
            <div className="flex justify-between font-bold">
              <span>Total Quantity:</span>
              <span>{totalQty}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total Price:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-4">
            <a
              href="/"
              className="text-white bg-orange-500 hover:bg-orange-600 rounded-lg text-sm px-4 py-2 transition duration-300"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
