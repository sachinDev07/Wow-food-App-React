import { useEffect, useState } from "react";

import { APP_API } from "../utils/constant";

const useFetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6708317&lng=71.5723953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const data = await response.json();
      setData(data.data.cards[0].data.data.cards);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error };
};

export default useFetchApi;
