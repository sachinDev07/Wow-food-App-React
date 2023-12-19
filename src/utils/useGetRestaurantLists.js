import { useState, useEffect } from "react";

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
    const api = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
    // try {
    const response = await fetch(api);
    const responseData = await response.json();
   

    // if (filterCount === 0) {
    // setNumberOfRestaurants(
    //   responseData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    // setSortsData(responseData.data.sorts);
    setRestaurantData(
      responseData.data.cards[2].card.card.gridElements.infoWithStyle
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
