import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  function getTotalQuantity(item) {
    const quantity = item.quantity || 0;
    const price = item.price || 0;
    const totalQuantity = (quantity * price) / 100;
    return isNaN(totalQuantity) ? 0 : totalQuantity.toFixed(2);
  }

  return (
    <div className="border-slate-400 rounded-md px-8 py-8 bg-white min-w-[700px]">
      {cartItems.map((cartItem) => (
        <div
          className="flex items-center justify-between mb-4 mt-2"
          key={cartItem.id}
        >
          <h1 className="font-medium texl-lg ">{cartItem.name}</h1>
          <div className="flex items-center justify-center gap-8 ">
            <div className="flex items-center justify-between text-green-500 font-medium border-slate-400 border bg-white rounded-md cursor-pointer w-24">
              <span
                className="text-2xl w-8 h-8 font-bold hover:bg-red-300 hover:text-red-600 flex items-center justify-center"
                onClick={() => dispatch(removeItem(cartItem))}
              >
                -
              </span>
              <span className="text-black">{cartItem.quantity}</span>
              <span
                className="text-2xl w-8 h-8 font-bold hover:bg-green-300 flex items-center justify-center"
                onClick={() => dispatch(addItem(cartItem))}
              >
                +
              </span>
            </div>
            <span className="w-24 text-center ml-2">
              Rs. {getTotalQuantity(cartItem)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
