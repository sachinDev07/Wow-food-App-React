import React, { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantsData = ({
  name,
  cuisines,
  areaName,
  lastTravel,
  rating,
  totalRating,
  menuItem,
}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-black font-bold text-xl">{name}</h1>
          <span className="block mt-2 text-slate-500">{cuisines.join()}</span>
          <div className="flex items-center gap-2 ">
            <span className="block text-slate-500">{areaName}, </span>
            <span className="block text-slate-500">{lastTravel}</span>
          </div>
        </div>
        <div className="border border-slate-300 p-1 flex flex-col rounded-md">
          <div className="flex items-center gap-2 text-green-600 font-bold text-lg">
            <i className="fa-solid fa-star fa-sm ml-2"></i>
            <span>{rating}</span>
          </div>
          <hr className="my-1 border border-slate-300" />
          <span className="text-slate-500 text-sm font-medium">
            {totalRating}
          </span>
        </div>
      </div>
      <hr className="my-8 border border-slate-300" />
      <div>
        <div className="flex items-center justify-between">
          <span className="text-2xl text-black font-bold">Recommened</span>
          <i
            className={`fa-solid fa-chevron-${
              show ? "down" : "up"
            } fa-xl cursor-pointer`}
            onClick={() => setShow(!show)}
          ></i>
        </div>
        {show &&
          menuItem?.map((item) => (
            <MenuItem
              key={item.card.info.id}
              item={item.card.info}
              {...item.card.info}
            />
          ))}
      </div>
    </>
  );
};

export default RestaurantsData;
