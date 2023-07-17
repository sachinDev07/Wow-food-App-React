const BannerSkeleton = () => {
  return (
    <section className="py-12 px-44 flex items-center justify-between bg-slate-900">
      {Array(4)
        .fill()
        .map((item, index) => (
          <div key={index} className="w-64 h-64 bg-slate-400 rounded-md"></div>
        ))}
    </section>
  );
};

export default BannerSkeleton;
