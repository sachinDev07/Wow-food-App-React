import React from "react";

const RestaurantCardSkeleton = () => {
  return (
    <main className="px-44 mt-8">
      <div className="flex items-center justify-between p-4">
        <div className="w-44 h-8 bg-slate-400 rounded-sm"></div>
        <div className="flex items-center gap-2">
          {Array(4)
            .fill()
            .map((item, index) => (
              <div
                key={index}
                className="w-28 h-8 bg-slate-400 rounded-sm"
              ></div>
            ))}
        </div>
      </div>
      <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
        {Array(24)
          .fill()
          .map((item, i) => (
            <div key={i} className="w-[260px] h-64 bg-slate-300 mb-2 rounded-md p-2">
                <div className="h-36 w-full bg-slate-400 rounded-md mb-4"></div>
                <div className="h-8 w-[110px] bg-slate-400 rounded-md mb-2"></div>
                <div className="h-8 w-[230px] bg-slate-400 rounded-md"></div>
                
            </div>
          ))}
      </div>
    </main>
  );
};

export default RestaurantCardSkeleton;
