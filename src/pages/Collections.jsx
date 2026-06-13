import Navbar from "../components/Navbar";
import PremiumFooter from "../components/PremiumFooter";
import FeaturedProducts from "../components/FeaturedProducts";

function Collections() {
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-24 text-center">
        <h1 className="text-6xl font-black">
          Premium Collections
        </h1>

        <p className="mt-4 text-gray-300">
          Discover our complete luxury range
        </p>
      </div>

      <FeaturedProducts />

      <PremiumFooter />
    </>
  );
}

export default Collections;