import { useState, useEffect } from "react";

import { SEARCH_API } from "../utils/constant";

const useSearchItem = () => {
  const [inputData, setInputData] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [imageCardData, setImageCardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchSearchData();
    fetchSuggestions();
  }, [inputData]);

  const fetchSearchData = async () => {
    try {
      const response = await fetch(SEARCH_API);
      const data = await response.json();
      setImageCardData(data.data.cards[1].card.card.imageGridCards.info);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSuggestions = async () => {
    const url = `https://www.swiggy.com/dapi/restaurants/search/suggest?lat=23.0363768&lng=72.5466727&str=${inputData}&trackingId=undefined`;
    const response = await fetch(url);
    const data = await response.json();
    setSuggestions(data.data.suggestions);
  };
  return {inputData, setInputData, suggestions, imageCardData, loading, errorMessage};
};

export default useSearchItem;
