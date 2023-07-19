import { Link } from "react-router-dom";

import { IMG_CDN_API } from "../utils/constant";
import Img from "./Img.jsx";

const ImageGridCards = ({ imageId }) => {
  return (
    <Link>
      <Img
        src={IMG_CDN_API + imageId}
        className="md:w-44 md:h-32"
      />
    </Link>
  );
};

export default ImageGridCards;
