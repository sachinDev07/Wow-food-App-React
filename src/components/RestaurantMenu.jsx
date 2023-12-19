import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useGetRestaurantLists from "../utils/useGetRestaurantLists";
import RestaurantCardSkeleton from "./RestaurantCardSkeleton";

const RestaurantMenu = () => {
  const { restaurantData, numberOfRestaurants, sortsData, loading, error } =
    useGetRestaurantLists();


  // if (loading) {
  //   return <RestaurantCardSkeleton />;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <main className="px-2 md:px-24 lg:px-44 py-12">
      {/* <div className="flex flex-col  items-center justify-between border-b-2 pb-1 md:gap-4">
        <span className="text-xl md:text-xl lg:text-3xl text-black font-bold">
          {numberOfRestaurants} restaurants
        </span>
        <div className="flex gap-4 flex-wrap md:flex-nowrap  md:gap-8 items-center mt-2 md:mt-0">
          {sortsData?.map((item) => (
            <span
              key={item.key}
              className="text-gray-700 text-sm md:text-lg font-medium cursor-pointer select-none inline-block hover:text-gray-900 border md:border-none rounded-md border-slate-500 p-1"
              onClick={() => handleApiFilter(item)}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div> */}
      <div className="flex items-center justify-between flex-wrap ">
        {restaurantData?.map((restaurant) => (
          <Link
          // to={`/restaurant/` + restaurant.info.id}
          key={restaurant.info.id}
          > 
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default RestaurantMenu;
