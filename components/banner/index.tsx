const Banner = () => {
  return (
    <div className="flex justify-between bg-yellow-400 border-y border-black items-center max-w-7xl mx-auto">
      <div className="px-10 space-y-5 py-5 lg:py-0">
        <h1 className="max-w-xl font-serif text-6xl">
          <span className="underline">Medium</span> is a place to write, read,
          and connect
        </h1>
        <p>
          It's easy and free to post your thinking on any topic and connect with
          millions of readers
        </p>
      </div>
      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
        alt="Medium"
      />
    </div>
  );
};

export default Banner;
