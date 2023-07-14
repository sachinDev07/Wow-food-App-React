import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, removeItem } from "../utils/cartSlice";

const CountQuantity = ({ item }) => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  function getQuantity(id){
    const item = cartItems.find((item) => item.id === id);
    return item ? item.quantity : null;
  }


  return (
    <>
      {getQuantity(item.id) <= 0 ? (
        <button
          type="button"
          className="absolute left-2 right-2 -bottom-4 px-7 text-green-500 font-medium py-1 border-slate-400 border bg-white rounded-md cursor-pointer hover:bg-slate-200"
          onClick={() => dispatch(addItem(item))}
        >
          Add
        </button>
      ) : (
        <div className="absolute flex items-center justify-between left-2 right-2 -bottom-4  text-green-500 font-medium border-slate-400 border bg-white rounded-md cursor-pointer">
          <span className="text-2xl font-bold hover:bg-red-300 hover:text-red-600 w-7 h-8 flex items-center justify-center" onClick={() => dispatch(removeItem(item))}>-</span>
          <span className="text-black">{getQuantity(item.id)}</span>
          <span className="text-2xl font-bold hover:bg-green-300 w-7 h-8 flex items-center justify-center" onClick={() => dispatch(addItem(item))}>+</span>
        </div>
      )}
    </>
  );
};

export default CountQuantity;
