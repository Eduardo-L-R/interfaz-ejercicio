import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex justify-between p-4">
        <span className="text-xl font-bold text-gray-800">DailyFitMate</span>
        <RxHamburgerMenu size={27} className="cursor-pointer" />
      </nav>
    </div>
  );
};
export default Navbar;
