import { IMG_CDN_API } from "../utils/constant";
import Img from "./Img.jsx";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  avgRating,
}) => {
  return (
    <main className="w-full md:w-[280px] md:h-72 hover:border-[2px] border-slate-500-600 p-2 rounded-md mt-8">
      <div className="rounded-md w-full h-44">
        <Img
          src={IMG_CDN_API + cloudinaryImageId}
          className="object-cover object-center w-screen md:w-[280px] h-72 md:h-44 rounded-md"
          alt="food-image"
        />
      </div>
      <span className="font-medium block text-xl mt-32 md:mt-2">{name}</span>
      <span className="mt-5 md:mt-[2px] block text-gray-600">
        {cuisines?.splice(0, 3).join()}
      </span>
      <div className="flex -center justify-between mt-3">
        <div
          className={`${
            avgRating > 3.9 ? "bg-green-500" : "bg-red-500"
          }  text-lg md:py-[1px] px-3 md:px-2 text-white rounded-sm flex gap-1 items-center`}
        >
          <i className="fa-solid fa-star fa-sm"></i>
          <span className="text-lg md:text-sm">{avgRating}</span>
        </div>
        <span className="text-lg md:text-sm font-medium text-gray-600">
          {slaString}
        </span>
        <span className="text-lg md:text-sm font-medium text-gray-600">
          {costForTwoString}
        </span>
      </div>
    </main>
  );
};

export default RestaurantCard;
