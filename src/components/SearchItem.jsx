import ImageGridCards from "./ImageGridCard";
import SearchSuggestions from "./SearchSuggestions";
import useSearchItem from "../utils/useSearchItem";
import InputSkeleton from "./InputSkeleton";

const SearchItem = () => {
  const {
    inputData,
    setInputData,
    suggestions,
    imageCardData,
    loading,
    errorMessage,
  } = useSearchItem();



  if (loading) {
    return <InputSkeleton />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="relative px-20 flex flex-col justify-center">
      <div className="fixed top-32 left-64 right-64 px-4 py-3 flex items-center justify-between rounded-md border border-slate-400 gap-4">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          className="text-black w-full outline-none placeholder-text-slate-500 font-medium"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <i
          className={`fa-solid ${
            !inputData.length ? "fa-magnifying-glass" : "fa-xmark"
          } fa-lg hover:text-orange-500 cursor-pointer`}
          onClick={() => setInputData("")}
        ></i>
      </div>
      <div className="mx-4 mt-24 flex flex-col">
        {!inputData && (
          <h1 className="text-2xl font-bold text-gray-700">Popular Cuisines</h1>
        )}
        <div className="flex mt-3 gap-4 overflow-hidden w-full">
          {!inputData &&
            imageCardData?.map((item) => (
              <ImageGridCards key={item.id} {...item} />
            ))}
        </div>
      </div>
      <div
        className="overflow-y-auto scrollbar-hidden"
        style={{ maxHeight: "calc(100vh - 180px)" }}
      >
        {inputData && suggestions?.length === 0 && (
          <div>The result you are searching for is not found.</div>
        )}
        {inputData &&
          suggestions?.map((suggestion) => (
            <SearchSuggestions key={suggestion.text} {...suggestion} />
          ))}
      </div>
    </div>
  );
};

export default SearchItem;