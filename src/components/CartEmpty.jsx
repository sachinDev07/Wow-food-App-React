import { Link } from "react-router-dom";
import EmptyCartImage from "../assets/empty-cart.avif";

const CartEmpty = () => {
  return (
    <div className="pt-[50px] flex flex-col items-center justify-center h-screen w-full bg-white">
      <img
        className="w-[450px] h-[450px]"
        src={EmptyCartImage}
        alt="empty-cart"
      />
      <h1 className="font-bold text-3xl text-slate-400">
        Your Cart is empty !
      </h1>
      <Link to="/">
        <button className="text-xl text-black font-medium  p-4 bg-green-400 mt-8 rounded-md">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default CartEmpty;
