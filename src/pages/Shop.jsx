import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import useWishlistStore from "../store/wishlistStore";

function Shop() {
  const addToWishlist = useWishlistStore(
  (state) => state.addToWishlist
);
  const [searchParams] = useSearchParams();
const [search, setSearch] = useState(
  searchParams.get("search") || ""
);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(5000);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://fashionx-u0u9.onrender.com/api/products"
        );
        console.log("API Response:", data);
setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

 let filteredProducts = products.filter((product) => {
  const term = search.trim().toLowerCase();

  const matchesSearch =
    product.name?.toLowerCase().includes(term) ||
    product.category?.toLowerCase().includes(term) ||
    product.badge?.toLowerCase().includes(term);

  const matchesCategory =
  category === "All" || product.category === category;

const matchesPrice =
  product.price <= maxPrice;

return (
  matchesSearch &&
  matchesCategory &&
  matchesPrice
);
});

if (sort === "low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (sort === "name") {
  filteredProducts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black">
            Shop Collection
          </h1>

          <p className="text-gray-500 mt-3">
            Discover premium fashion curated for your lifestyle.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
  <input
    type="text"
    placeholder="🔍 Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 px-6 py-4 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black text-lg"
  />

  <select
    value={sort}
    onChange={(e) => setSort(e.target.value)}
    className="px-5 py-4 rounded-2xl border border-gray-300 shadow-md"
  >
    <option value="">Sort By</option>
    <option value="low">Price: Low to High</option>
    <option value="high">Price: High to Low</option>
    <option value="name">Name (A-Z)</option>
  </select>
</div>
<div className="flex gap-3 mb-8 flex-wrap">

  <button
    onClick={() => setCategory("All")}
    className={`px-5 py-2 rounded-full ${
      category === "All"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setCategory("Men")}
    className={`px-5 py-2 rounded-full ${
      category === "Men"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Men
  </button>

  <button
    onClick={() => setCategory("Women")}
    className={`px-5 py-2 rounded-full ${
      category === "Women"
        ? "bg-black text-white"
        : "bg-gray-200"
    }`}
  >
    Women
  </button>

</div>
<div className="mb-10">
  <div className="flex justify-between mb-2">
    <h3 className="font-semibold">
      Maximum Price
    </h3>

    <span className="font-bold">
      ₹{maxPrice}
    </span>
  </div>

  <input
    type="range"
    min="500"
    max="5000"
    step="100"
    value={maxPrice}
    onChange={(e) =>
      setMaxPrice(Number(e.target.value))
    }
    className="w-full"
  />
</div>
<div className="flex justify-between items-center mb-6">
  <h2 className="text-xl font-bold">
    Products
  </h2>

  <p className="text-gray-500">
    {filteredProducts.length} Product
    {filteredProducts.length !== 1 && "s"} Found
  </p>
</div>
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-500 text-xl mt-10">
            No products found
          </div>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link
  key={product._id}
  to={`/product/${product._id}`}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />

                <div className="p-5">
                  <h2 className="font-bold text-lg">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 mt-1">
                    {product.category}
                  </p>
                  <p className="text-yellow-500 font-semibold mt-2">
  ⭐ {product.rating}
</p>

                  <div className="flex items-center gap-3 mt-2">
  <p className="text-2xl font-black">
    ₹{product.price}
  </p>

  <p className="text-gray-400 line-through">
    ₹{product.oldPrice}
  </p>
</div>

                  <span className="inline-block mt-3 px-4 py-1 rounded-full bg-linear-to-r from-pink-500 to-red-500 text-white text-xs font-bold">
  {product.badge}
</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Shop;