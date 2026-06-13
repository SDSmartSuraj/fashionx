import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CategoryProducts({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        "https://fashionx-u0u9.onrender.com/api/products"
      );

      const filtered = data.filter(
        (product) =>
          product.category === category
      );

      setProducts(filtered);
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-4 gap-8">

        {products.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">
              <h2 className="font-bold text-xl">
                {product.name}
              </h2>

              <p className="mt-2 font-bold">
                ₹{product.price}
              </p>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default CategoryProducts;