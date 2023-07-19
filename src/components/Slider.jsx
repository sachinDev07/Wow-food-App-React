import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { responsive } from "../utils/breakPoints";
import Img from "./Img";
import { IMG_CDN_API } from "../utils/constant";
import useFetchApi from "../utils/useFetchApi";
import BannerSkeleton from "./BannerSkeleton";

const Slider = () => {
  const { data, loading, error } = useFetchApi();

  if (loading) {
    return <BannerSkeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="px-20 md:px-44 lg:px-44 bg-slate-900 py-20 md:py-12 relative z-30">
      <Carousel responsive={responsive}>
        {data?.map((myitems) => (
          <div
            key={IMG_CDN_API + myitems.data.bannerId}
            className="transition-transfrom hover:scale-105 duration-150"
          >
            <Img
              className="h-auto w-64"
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
