import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [numberOfRestaurants, setNumberOfRestaurants] = useState(null);
  const [sortsData, setSortsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterApi, setFilterApi] = useState("RELEVANCE");
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    getRestaurantLists();
  }, [filterApi]);

  const getRestaurantLists = async () => {
    const api = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0363768&lng=72.5466727&sortBy=${filterApi}&page_type=DESKTOP_WEB_LISTING&`;
    try {
      const response = await fetch(api);
      const responseData = await response.json();

      if (filterCount === 0) {
        setNumberOfRestaurants(
          responseData.data.cards[2].data.data.totalOpenRestaurants
        );
        setSortsData(responseData.data.sorts);
        setRestaurantData(responseData.data.cards[2].data.data);
      } else {
        setNumberOfRestaurants(
          responseData.data.cards[0].data.data.totalRestaurants
        );
        setRestaurantData(responseData.data.cards[0].data.data);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApiFilter = (item) => {
    if (item.defaultSelection) {
      setFilterCount(0);
      setFilterApi(item.key);
    } else {
      setFilterCount(filterCount + 1);
      setFilterApi(item.key);
    }
  };

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
