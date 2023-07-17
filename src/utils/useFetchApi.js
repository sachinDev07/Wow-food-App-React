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
      const response = await fetch(APP_API);
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
