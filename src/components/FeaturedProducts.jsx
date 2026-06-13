import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useWishlistStore from "../store/wishlistStore";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const addToWishlist = useWishlistStore(
    (state) => state.addToWishlist
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
       const { data } = await axios.get(
  "https://fashionx-u0u9.onrender.com/api/products"
);

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section
  data-aos="fade-up"
  className="py-24 bg-gray-50"
>
      <div className="text-center mb-16">
        <p className="uppercase tracking-[6px] text-gray-500">
          Premium Collection
        </p>

        <h2 className="text-6xl font-black mt-4">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-4">
          Curated luxury pieces for modern fashion lovers
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {products.map((item) => (
          <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="group block hover:-translate-y-3 transition-all duration-500"
          >

            <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Badge */}
              <div className="absolute top-5 left-5">
                <span className="bg-black text-white px-4 py-2 rounded-full text-xs tracking-widest">
                  {item.badge}
                </span>
              </div>

              {/* Wishlist */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();

                  addToWishlist(item);
                }}
                className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-125 transition duration-300"
              >
                {wishlist.some(
                  (product) =>
                    product._id === item._id
                )
                  ? "❤️"
                  : "🤍"}
              </button>

              {/* Gradient */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent h-44"></div>

              {/* Product Info Overlay */}
              <div className="absolute bottom-6 left-6 text-white">

                <h3 className="text-2xl font-black tracking-wide">
                  {item.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                  <span>⭐</span>
                  <span>{item.rating}</span>
                </div>

              </div>

            </div>

            {/* Price */}
            <div className="mt-5">

              <div className="flex items-center gap-3">
                <span className="text-2xl font-black">
                  ₹{item.price}
                </span>

                <span className="text-gray-400 line-through">
                  ₹{item.oldPrice}
                </span>
              </div>

              <button className="w-full mt-5 py-4 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                Add To Cart
              </button>

            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}

export default FeaturedProducts;