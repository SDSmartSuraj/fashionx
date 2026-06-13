import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-5xl font-bold mb-10">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Shipping */}
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Shipping Address
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="City"
                className="w-full border p-4 rounded-xl"
              />

              <input
                type="text"
                placeholder="Pincode"
                className="w-full border p-4 rounded-xl"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white shadow-xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Products</span>
                <span>₹4998</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>

              <hr />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₹4998</span>
              </div>

              <button
  onClick={() => navigate("/success")}
  className="w-full mt-6 bg-black text-white py-4 rounded-xl hover:scale-105 transition"
>
  Place Order
</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Checkout;