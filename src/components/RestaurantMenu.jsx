import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import useGetRestaurantLists from "../utils/useGetRestaurantLists";

const RestaurantMenu = () => {
  const { restaurantData, numberOfRestaurants, sortsData, loading, error } =
    useGetRestaurantLists();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="px-44 py-12">
      <div className="flex items-center justify-between border-b-2 pb-1">
        <span className="text-3xl text-black font-bold">
          {numberOfRestaurants} restaurants
        </span>
        <div className="flex gap-8 items-center">
          {sortsData?.map((item) => (
            <span
              key={item.key}
              className="text-gray-700 font-medium cursor-pointer select-none inline-block hover:text-gray-900"
              onClick={() => handleApiFilter(item)}
            >
              {item.title}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap">
        {restaurantData?.cards?.map((restaurant) => (
          <Link
            to={`/restaurant/` + restaurant.data.id}
            key={restaurant.data.id}
          >
            <RestaurantCard {...restaurant.data} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default RestaurantMenu;
