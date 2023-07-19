import React from "react";

import RestaurantsData from "../components/RestaurantsData";
import useRestaurantData from "../utils/useRestaurantData";

const RestaurantPage = () => {
  const {loading, errorMessage, restaurantData} = useRestaurantData();

  // loading will show till data is loading...
  if (loading) return <div>Loading...</div>;

  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <main className="pt-[100px] px-44 select-none">
      <RestaurantsData {...restaurantData} />
    </main>
  );
};

export default RestaurantPage;
