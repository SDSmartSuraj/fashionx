import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-xl">

        <div className="text-7xl mb-6">
          ✅
        </div>

        <h1 className="text-5xl font-bold mb-4">
          Order Placed!
        </h1>

        <p className="text-gray-500 mb-8">
          Thank you for shopping with FashionX.
          Your order has been received.
        </p>

        <Link
          to="/"
          className="bg-black text-white px-8 py-4 rounded-xl inline-block"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
}

export default OrderSuccess;