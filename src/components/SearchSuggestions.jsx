import { IMG_CDN_API } from "../utils/constant";
import Img from "./Img";

const SearchSuggestions = ({ text, type, cloudinaryId }) => {
  return (
    <div className="ml-4 md:ml-8 h-full cursor-pointer hover:bg-sky-50 py-4">
      <div className="flex items-center gap-6">
        <Img src={IMG_CDN_API + cloudinaryId} className="w-16 h-16" />
        <div className="flex flex-col gap-1">
          <span className="text-base text-slate-900">{text}</span>
          <span className=" text-slate-700">{type}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
