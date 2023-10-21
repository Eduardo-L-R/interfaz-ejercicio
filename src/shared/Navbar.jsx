import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between p-4">
        <span className="text-xl font-bold text-gray-800">DailyFitMate</span>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <RxHamburgerMenu size={27} className="cursor-pointer" />
      </nav>
    </div>
  );
};
export default Navbar;
