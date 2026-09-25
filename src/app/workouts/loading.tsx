const loading = () => {
  return (
    <div>
      <div className="container mx-auto mt-16 px-4">
        <div className="skeleton h-10 w-64 rounded-lg"></div>{" "}
        <div className="skeleton mt-5 h-5 w-80 max-w-full rounded-lg"></div>
      </div>
      <div className="container mx-auto mt-8 grid grid-cols-1 gap-4 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-[#15171c] shadow-lg"
          >
            <div className="skeleton h-56 w-full rounded-none"></div>{" "}
            <div className="space-y-4 p-5">
              <div className="skeleton h-6 w-3/4 rounded-lg"></div>{" "}
              <div className="skeleton h-4 w-full rounded-lg"></div>{" "}
              <div className="skeleton h-4 w-2/3 rounded-lg"></div>{" "}
              <div className="flex items-center justify-between pt-3">
                <div className="skeleton h-5 w-24 rounded-lg"></div>{" "}
                <div className="skeleton h-9 w-20 rounded-lg"></div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default loading;
