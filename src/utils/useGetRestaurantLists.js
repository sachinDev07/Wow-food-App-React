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
  }, [filterApi]);

  const getRestaurantLists = async () => {
    const api = ` https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0363768&lng=72.5466727&sortBy=${filterApi}&page_type=DESKTOP_WEB_LISTING&`;
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

  return { restaurantData, numberOfRestaurants, handleApiFilter, sortsData, loading, error, loading, error };
};

export default useGetRestaurantLists;