import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useSearchParams } from "react-router-dom";

function Shop() {
  const [searchParams] = useSearchParams();
const [search, setSearch] = useState(
  searchParams.get("search") || ""
);
  const [products, setProducts] = useState([]);

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

  const filteredProducts = products.filter((product) => {
    const term = search.trim().toLowerCase();

    return (
      product.name?.toLowerCase().includes(term) ||
      product.category?.toLowerCase().includes(term) ||
      product.badge?.toLowerCase().includes(term)
    );
  });

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

        <div className="relative mb-10">
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black text-lg"
          />
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

                  <p className="text-2xl font-black mt-2">
                    ₹{product.price}
                  </p>

                  <span className="inline-block mt-2 px-3 py-1 bg-black text-white text-sm rounded-full">
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