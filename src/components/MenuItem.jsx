import React from "react";

import { IMG_CDN_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import CountQuantity from "./CountQuantity";

const MenuItem = ({ name, description, price, imageId, item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between mt-8 border-b-2 border-slate-300 pb-12">
      <div className="flex flex-col">
        <span className="text-[#3e4152] font-medium">{name}</span>
        <span className="mt-2 text-[#3e4152] w-[700px]">{description}</span>
        <span className="text-[#3e4152]">Rs {price}</span>
      </div>
      <div className="relative">
        <img
          src={IMG_CDN_API + imageId}
          alt="food-item"
          className="w-28 h-28 rounded-md object-contain object-center"
        />
        <CountQuantity item={item} />
      </div>
    </div>
  );
};

export default MenuItem;
