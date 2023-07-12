import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { responsive } from "../utils/breakPoints";
import Img from "./Img";
import { APP_API, IMG_CDN_API } from "../utils/constant";

const Slider = () => {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-44 bg-slate-900 py-12 relative z-30">
      <Carousel responsive={responsive}>
        {data?.map((myitems) => (
          <div key={IMG_CDN_API + myitems.data.bannerId} className="transition-transfrom hover:scale-105 duration-150">
            <Img
              className="h-auto w-64 "
              src={IMG_CDN_API + myitems.data.creativeId}
              alt="image"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
