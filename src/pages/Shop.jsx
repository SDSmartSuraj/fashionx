import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

function Shop() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
  const fetchProducts = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(data);
  };

  fetchProducts();
}, []);

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-5xl font-bold mb-8">
          Shop
        </h1>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="border p-4 rounded-xl w-full mb-8"
        />

        <div className="grid md:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <Link
             key={product._id}
to={`/product/${product._id}`}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold">
                  {product.name}
                </h2>

                <p>₹{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;