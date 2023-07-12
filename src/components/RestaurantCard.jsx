import { IMG_CDN_API } from "../utils/constant";
import Img from "./Img.jsx"

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  costForTwoString,
  slaString,
  avgRating,
}) => {

  return (
    <main className="w-[280px] h-72 hover:border-[2px] border-slate-500-600 p-2 rounded-md mt-8">
      <div className="rounded-md w-full h-44">
        <Img
          src={IMG_CDN_API + cloudinaryImageId}
          className="object-cover object-center w-[280px] h-44 rounded-md"
          alt="food-image"
        />
      </div>
      <span className="font-medium block mt-2">{name}</span>
      <span className="mt-[2px] block text-gray-600">
        {cuisines?.splice(0, 3).join()}
      </span>
      <div className="flex -center justify-between mt-3">
        <div
          className={`${
            avgRating > 3.9 ? "bg-green-500" : "bg-red-500"
          } py-[1px] px-2 text-white rounded-sm flex gap-1 items-center`}
        >
          <i className="fa-solid fa-star fa-sm"></i>
          <span className="text-sm">{avgRating}</span>
        </div>
        <span className="text-sm font-medium text-gray-600">{slaString}</span>
        <span className="text-sm font-medium text-gray-600">
          {costForTwoString}
        </span>
      </div>
    </main>
  );
};

export default RestaurantCard;
