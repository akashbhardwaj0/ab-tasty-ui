import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../features/CategorySlice";

// Define common class names for colors and interactivity
const buttonClasses =
  "text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2";
const headingTextClass = "text-orange-800 font-semibold";
const containerBgClass = "bg-cream-50";

const CategoryMenu = () => {
  const { allFood } = useSelector((state) => state.categoryList);

  const [categoryList, setCategoryList] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    setCategoryList(allFood.map((item) => item.category));
  }, []);
  const uniqueCategoryList = [...new Set(categoryList)];

  const handleCategory = (value)=>{
    dispatch(setCategory(value))
  }

  return (
    <div className={`mx-6 ${containerBgClass} p-4 rounded-lg shadow-md`}>
      <h3 className={`text-xl ${headingTextClass}`}>Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button type="button" onClick={()=>handleCategory("All")} className={buttonClasses}>
          All
        </button>
        {uniqueCategoryList.map((item, index) => {
          return (
            <button key={index} type="button" onClick={()=>handleCategory(item)} className={buttonClasses}>
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
