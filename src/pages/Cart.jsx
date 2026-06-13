import Navbar from "../components/Navbar";
import useCartStore from "../store/cartStore";
import { Link } from "react-router-dom";

function Cart() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const removeFromCart = useCartStore(
    (state) => state.removeFromCart
  );

  const increaseQuantity = useCartStore(
    (state) => state.increaseQuantity
  );

  const decreaseQuantity = useCartStore(
    (state) => state.decreaseQuantity
  );

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="max-w-6xl mx-auto p-10">
        <h1 className="text-5xl font-bold mb-10">
          Shopping Cart
        </h1>

        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-2xl p-6 mb-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  {item.name}
                </h2>

                <p>
                  ₹{item.price}
                </p>

                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="bg-gray-200 px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        <div className="text-right mt-10">
          <h2 className="text-3xl font-bold">
            Total: ₹{total}
          </h2>
          <Link
  to="/checkout"
  className="inline-block mt-6 bg-black text-white px-8 py-4 rounded-xl"
>
  Proceed To Checkout
</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;