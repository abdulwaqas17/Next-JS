import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg text-white p-4 sticky top-0 z-50 transform "
      
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {" "}
        {/* Changed here */}
        <Link
          href="/"
          className="text-3xl font-bold tracking-wider text-purple-400 hover:text-purple-300 transition duration-300 mb-4 md:mb-0"
        >
          {" "}
          {/* Added mb for mobile spacing */}
          VIP Studio
        </Link>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 items-center">
          {" "}
          {/* Changed here */}
          <li>
            <Link
              href="/"
              className="text-lg hover:text-purple-300 transform hover:scale-110 hover:shadow-3d-dark transition duration-300 ease-in-out p-2 rounded-md"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg hover:text-purple-300 transform hover:scale-110 hover:shadow-3d-dark transition duration-300 ease-in-out p-2 rounded-md"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg hover:text-purple-300 transform hover:scale-110 hover:shadow-3d-dark transition duration-300 ease-in-out p-2 rounded-md"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
