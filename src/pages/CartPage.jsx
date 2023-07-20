import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import CartEmpty from "../components/CartEmpty";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const deliveryCharge = 24;
  const gstCharge = 54;

  function totalItem() {
    const totalItemPrice = cartItems
      .map((cartItem) =>
        cartItem.price && cartItem.quantity
          ? (cartItem.price / 100) * cartItem.quantity
          : 0
      )
      .reduce((acc, cartItem) => acc + cartItem, 0);
    return totalItemPrice.toFixed(2);
  }

  function getTotalPrice() {
    const totalItemPrice = cartItems
      .map((cartItem) =>
        cartItem.price && cartItem.quantity
          ? (cartItem.price / 100) * cartItem.quantity
          : 0
      )
      .reduce((acc, cartItem) => acc + cartItem, 0);
    return (totalItemPrice + deliveryCharge + gstCharge).toFixed(2);
  }

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="pt-[100px] md:flex md:flex-col px-2 md:px-32 lg:px-44 py-8 justify-between bg-slate-200 min-h-screen gap-4 md:w-full">
      <div>
        <Cart />
      </div>
      <div className="mt-4 ">
        <div className="lg:fixed lg:top-24 lg:max-w-[300px] lg:left-[950px] right-0 left-0 md:right-44 px-2 md:px-8 py-8 bg-white md:min-w-[400px] rounded-md">
          <h1 className="font-medium">Bill Details</h1>
          <div className="flex items-center justify-between mt-2">
            <span className="text-slate-500">Item Total</span>
            <span>Rs. {totalItem()}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-slate-500">Delivery Free | 1.6 kms</span>
            <span>Rs. {deliveryCharge}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-slate-500">GST and Restaurant Charges</span>
            <span>Rs. {gstCharge}</span>
          </div>
          <hr className="my-4 border-2 border-black" />
          <div className="flex items-center justify-between mt-4">
            <span className="font-bold">TO PAY</span>
            <span className="font-bold">Rs {getTotalPrice()}</span>
          </div>
          <Link to="/thankyou">
            <button className="flex items-center justify-center w-full mt-7 bg-green-500 hover:bg-green-600 transition-colors duration-300 py-2 rounded-md text-white text-lg">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
