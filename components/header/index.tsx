import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between max-w-7xl mx-auto p-5">
      <div className="flex items-center gap-4">
        <Link href="/">
          <img
            className="w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="Medium"
          />
        </Link>
        <div className="hidden md:flex lg:flex items-center gap-4">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="cursor-pointer px-4 py-1 rounded-full bg-green-600 text-white">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <h3 className="text-green-600 cursor-pointer">Sign in</h3>
        <h3 className="text-green-600 cursor-pointer border-2 border-green-600 rounded-full px-4 py-1">
          Get Started
        </h3>
      </div>
    </div>
  );
};

export default Header;
