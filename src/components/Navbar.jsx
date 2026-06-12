import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        <h1 className="text-3xl font-bold">
          FASHIONX
        </h1>

        <div className="hidden md:flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/">Men</Link>
          <Link to="/">Women</Link>
        </div>

        <div className="flex gap-5 items-center">
          <FaUser size={20} />
          <FaShoppingCart size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;