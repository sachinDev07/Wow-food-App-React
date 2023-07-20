import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const dispatch = useDispatch();

  function getTotalQuantity(item) {
    const quantity = item.quantity || 0;
    const price = item.price || 0;
    const totalQuantity = (quantity * price) / 100;
    return isNaN(totalQuantity) ? 0 : totalQuantity.toFixed(2);
  }

  return (
    <div className="border-slate-400 rounded-md px-2  py-8 bg-white md:w-[500px] lg:min-w-[700px] lg:px-6">
      {cartItems.map((cartItem) => (
        <div
          className="flex items-center justify-between mb-4 mt-2"
          key={cartItem.id}
        >
          <h1 className="font-medium text-xs md:texl-lg mr-1 lg:text-xl">{cartItem.name}</h1>
          <div className="flex items-center justify-center gap:-4 md:gap-8">
            <div className="flex items-center justify-between text-green-500 font-medium border-slate-400 border bg-white rounded-md cursor-pointer md:w-24">
              <span
                className="text-lg md:text-2xl w-6 h-6 md:w-8 md:h-8 font-bold hover:bg-red-300 hover:text-red-600 flex items-center justify-center"
                onClick={() => dispatch(removeItem(cartItem))}
              >
                -
              </span>
              <span className="text-black text-sm">{cartItem.quantity}</span>
              <span
                className="text-lg md:text-2xl w-6 h-6 md:w-8 md:h-8 font-bold hover:bg-green-300 flex items-center justify-center"
                onClick={() => dispatch(addItem(cartItem))}
              >
                +
              </span>
            </div>
            <span className="w-20 text-sm md:text-lg ml-1 md:w-24 text-center md:ml-2">
              Rs. {getTotalQuantity(cartItem)}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
