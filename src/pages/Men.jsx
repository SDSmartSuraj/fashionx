import Navbar from "../components/Navbar";
import PremiumFooter from "../components/PremiumFooter";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryProducts from "../components/CategoryProducts";

function Men() {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white py-24 text-center">
        <h1 className="text-6xl font-black">
          Men Collection
        </h1>

        <p className="mt-4 text-gray-300">
          Premium fashion for modern men
        </p>
      </div>

      <CategoryProducts category="Men" />

      <PremiumFooter />
    </>
  );
}

export default Men;