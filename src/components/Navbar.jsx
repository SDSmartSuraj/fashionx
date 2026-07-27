import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaUser,
} from "react-icons/fa";

import useWishlistStore from "../store/wishlistStore";
import useCartStore from "../store/cartStore";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const cart = useCartStore(
    (state) => state.cart
  );

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/shop?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-linear-to-r from-black via-gray-900 to-black text-white text-center py-3 text-sm tracking-wider">
        ✨ PREMIUM COLLECTIONS • FREE SHIPPING ABOVE ₹999
      </div>

      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <div>
              <h1 className="text-4xl font-black tracking-[6px]">
                FASHIONX
              </h1>

              <p className="text-[10px] tracking-[6px] text-gray-500 uppercase">
                Premium Collection
              </p>
            </div>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex gap-10 font-semibold uppercase tracking-wider text-sm">
            <Link to="/" className="hover:text-gray-500 transition">
              Home
            </Link>

            <Link to="/shop" className="hover:text-gray-500">
              Shop
            </Link>

            <Link to="/men" className="hover:text-gray-500 transition">
              Men
            </Link>

            <Link to="/women" className="hover:text-gray-500 transition">
              Women
            </Link>

            <Link to="/collections" className="hover:text-gray-500">
              Collections
            </Link>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-3 w-72">
            <FaSearch className="text-gray-400" />

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-transparent outline-none ml-3 w-full"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">

            <Link to="/wishlist" className="relative">
              <FaHeart
                size={20}
                className="cursor-pointer hover:scale-125 transition duration-300"
              />

              <span className="absolute -top-3 -right-3 bg-pink-500 text-white text-xs px-2 rounded-full">
                {wishlist.length}
              </span>
            </Link>

            <Link
              to="/login"
              className="hover:scale-110 transition"
            >
              <FaUser
                size={20}
                className="cursor-pointer hover:scale-125 transition duration-300"
              />
            </Link>

            <Link
              to="/cart"
              className="relative hover:scale-110 transition"
            >
              <FaShoppingCart
                size={22}
                className="hover:scale-125 transition duration-300"
              />

              <span className="absolute -top-3 -right-3 bg-black text-white text-xs px-2 rounded-full">
                {cart.length}
              </span>
            </Link>

          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col p-6 gap-5 font-semibold uppercase">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/shop"
                onClick={() => setMenuOpen(false)}
              >
                Shop
              </Link>

              <Link
                to="/men"
                onClick={() => setMenuOpen(false)}
              >
                Men
              </Link>

              <Link
                to="/women"
                onClick={() => setMenuOpen(false)}
              >
                Women
              </Link>

              <Link
                to="/collections"
                onClick={() => setMenuOpen(false)}
              >
                Collections
              </Link>

            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;