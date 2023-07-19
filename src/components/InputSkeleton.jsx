import React from "react";

const InputSkeleton = () => {
  return (
    <main className="px-4 md:px-44 mt-4">
      <div className="bg-slate-300 h-16 rounded-md"></div>
      <div className="mt-4">
        <div className="bg-slate-300 w-1/2 h-4 rounded-md mt-2"></div>
        <div className="bg-slate-300 w-[40%] h-4 rounded-md mt-2"></div>
        <div className="bg-slate-300 w-[30%] h-4 rounded-md mt-2"></div>
      </div>
    </main>
  );
};

export default InputSkeleton;
