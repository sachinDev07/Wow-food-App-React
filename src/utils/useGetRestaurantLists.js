import { useState, useEffect } from "react";
import { APP_API } from "./constant";

const useGetRestaurantLists = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [numberOfRestaurants, setNumberOfRestaurants] = useState(null);
  const [sortsData, setSortsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterApi, setFilterApi] = useState("RELEVANCE");
  const [filterCount, setFilterCount] = useState(0);

  useEffect(() => {
    getRestaurantLists();
  }, []);

  const getRestaurantLists = async () => {
    // try {
    const response = await fetch(APP_API);
    const responseData = await response.json();
   

    // if (filterCount === 0) {
    // setNumberOfRestaurants(
    //   responseData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setSortsData(responseData.data.sorts);
    setRestaurantData(
      responseData.data.cards[3].card.card.gridElements.infoWithStyle
        .restaurants
    );
    // } else {
    // setNumberOfRestaurants(
    //   responseData.data.cards[0].data.data.totalRestaurants
    // );
    // setRestaurantData(responseData.data.cards[4].card.card.gridElements);
    // }
    // } catch (error) {
    //   setError(error.message);
    // } finally {
    //   setLoading(false);
    // }
  };

  // const handleApiFilter = (item) => {
  //   if (item.defaultSelection) {
  //     setFilterCount(0);
  //     setFilterApi(item.key);
  //   } else {
  //     setFilterCount(filterCount + 1);
  //     setFilterApi(item.key);
  //   }
  // };

  return {
    restaurantData,
    numberOfRestaurants,
    sortsData,
    loading,
    error,
    loading,
    error,
  };
};

export default useGetRestaurantLists;
