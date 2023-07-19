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

  const getQuery = (link) => {
    const url = link;
    const queryIndex = url.indexOf("?query=");
    if (queryIndex !== -1) {
      const query = url.substring(queryIndex + 7);
      return query;
    }
  };

  const searchHandler = (item) => {
    const newInputData = getQuery(item.action.link);
    setInputData(newInputData);
  };

  if (loading) {
    return <InputSkeleton />;
  }

  if (errorMessage) {
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="relative px-2 md:px-20 flex flex-col justify-center">
      <div className="fixed top-24 md:top-32 left-4 right-4 md:left-64 md:right-64 px-4 py-3 flex items-center justify-between rounded-md border border-slate-400 gap-4 z-40 bg-white">
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
          <h1 className="text-3xl md:text-2xl font-bold text-gray-700">Popular Cuisines</h1>
        )}
        <div className="flex mt-3 gap-2 md:gap-4 flex-wrap lg:flex-nowrap overflow-hidden w-full">
          {!inputData &&
            imageCardData?.map((item) => (
              <div key={item.id} onClick={() => searchHandler(item)}>
                <ImageGridCards {...item} />
              </div>
            ))}
        </div>
      </div>
      <div
        className="overflow-y-auto scrollbar-hidden pb-20 z-30"
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
