import React, { forwardRef } from "react";
import FoodCard from "./FoodCard";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from "react-redux";

const FoodItems = forwardRef((props, ref) => {
  const handleToast = (name) => toast.success(`${name} Added`);
  const { filteredByCategory } = useSelector((state) => state.categoryList);
  const {  inputSearchValue } = useSelector((state) => state.search);

  const filteredItems = filteredByCategory.filter(item =>
    item.name.toLowerCase().includes(inputSearchValue.toLowerCase())
  );

  return (
    <div ref={ref} className="my-6 flex flex-wrap gap-14 justify-center lg:justify-start mx-6">
      <Toaster position="top-center" reverseOrder={false} />
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => (
          <FoodCard
            key={index}
            id={item.id}
            img={item.img}
            name={item.name}
            rating={item.rating}
            price={item.price}
            desc={item.desc}
            handleToast={handleToast}
          />
        ))
      ) : (
        <div>No items found.</div>
      )}
    </div>
  );
});

export default FoodItems;
