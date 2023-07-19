import React from "react";

import { IMG_CDN_API } from "../utils/constant";
import CountQuantity from "./CountQuantity";

const MenuItem = ({ name, description, price, imageId, item }) => {

  return (
    <div className="flex items-center justify-between mt-8 border-b-2 gap-4 md:gap-0 border-slate-300 pb-12">
      <div className="flex flex-col">
        <span className="text-[#3e4152] w-44 md:w-auto font-medium">{name}</span>
        <span className="mt-2 text-[#3e4152] w-[700px] hidden md:block md:w-[350px]">{description}</span>
        <span className="text-[#3e4152]">Rs {price/100}</span>
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
