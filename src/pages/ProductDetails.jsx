import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import useCartStore from "../store/cartStore";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);

  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
  "https://fashionx-u0u9.onrender.com/api/products"
);

        setProduct(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Loading...
      </h1>
    );
  }

  if (!product) {
    return (
      <h1 className="text-center mt-20 text-3xl">
        Product Not Found
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Images */}
          <div>

            <div className="overflow-hidden rounded-3xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full rounded-3xl shadow-2xl hover:scale-110 transition duration-700 cursor-zoom-in"
              />
            </div>

            <div className="grid grid-cols-4 gap-3 mt-4">

              <img
                src={product.image}
                alt=""
                className="rounded-xl border-2 border-black cursor-pointer"
              />

              <img
                src={product.image}
                alt=""
                className="rounded-xl cursor-pointer"
              />

              <img
                src={product.image}
                alt=""
                className="rounded-xl cursor-pointer"
              />

              <img
                src={product.image}
                alt=""
                className="rounded-xl cursor-pointer"
              />

            </div>

          </div>

          {/* Product Info */}
          <div>

            <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
              {product.badge}
            </span>

            <h1 className="text-6xl font-black mt-6">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-6">
              <span className="text-yellow-500">
                ⭐⭐⭐⭐⭐
              </span>

              <span>
                {product.rating} Rating
              </span>
            </div>

            <div className="mt-4">
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                In Stock
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-4xl font-black">
                ₹{product.price}
              </span>

              <span className="text-2xl text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            </div>

            <p className="mt-8 text-gray-600 leading-8">
              Crafted with premium materials and
              designed for modern fashion lovers.
              Perfect blend of luxury, comfort,
              and timeless style.
            </p>

            {/* Size */}
            <div className="mt-10">
              <h3 className="font-bold mb-4">
                Select Size
              </h3>

              <div className="flex gap-3">
                {["S", "M", "L", "XL"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() =>
                        setSize(item)
                      }
                      className={`w-14 h-14 rounded-xl border ${
                        size === item
                          ? "bg-black text-white"
                          : ""
                      }`}
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h3 className="font-bold mb-4">
                Quantity
              </h3>

              <div className="flex items-center border rounded-xl w-fit overflow-hidden">

                <button
                  onClick={() =>
                    setQty(qty > 1 ? qty - 1 : 1)
                  }
                  className="px-5 py-3"
                >
                  -
                </button>

                <span className="px-6">
                  {qty}
                </span>

                <button
                  onClick={() =>
                    setQty(qty + 1)
                  }
                  className="px-5 py-3"
                >
                  +
                </button>

              </div>
            </div>

            {/* Add To Cart */}
            <button
              onClick={() =>
                addToCart({
                  ...product,
                  size,
                  qty,
                })
              }
              className="mt-10 w-full bg-black text-white py-5 rounded-2xl text-lg font-bold hover:bg-gray-800 transition"
            >
              Add To Cart
            </button>

            {/* Delivery */}
            <div className="mt-8 bg-gray-50 p-6 rounded-3xl">

              <p>
                🚚 Free Delivery in 3-5 Days
              </p>

              <p className="mt-3">
                🔄 7 Days Easy Return
              </p>

              <p className="mt-3">
                🔒 Secure Checkout
              </p>

            </div>

          </div>

        </div>

        {/* Reviews */}
        <section className="mt-24">

          <h2 className="text-4xl font-black mb-10">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-gray-100 rounded-3xl p-6">
              <p>
                ⭐⭐⭐⭐⭐ Amazing quality and fit.
              </p>
              <h4 className="font-bold mt-4">
                Rahul
              </h4>
            </div>

            <div className="bg-gray-100 rounded-3xl p-6">
              <p>
                ⭐⭐⭐⭐⭐ Premium fabric and comfort.
              </p>
              <h4 className="font-bold mt-4">
                Arjun
              </h4>
            </div>

            <div className="bg-gray-100 rounded-3xl p-6">
              <p>
                ⭐⭐⭐⭐⭐ Worth every rupee.
              </p>
              <h4 className="font-bold mt-4">
                Karan
              </h4>
            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;