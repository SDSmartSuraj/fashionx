import Navbar from "../components/Navbar";
import PremiumFooter from "../components/PremiumFooter";
import FeaturedProducts from "../components/FeaturedProducts";
import CategoryProducts from "../components/CategoryProducts";

function Women() {
  return (
    <>
      <Navbar />

      <div className="bg-pink-600 text-white py-24 text-center">
        <h1 className="text-6xl font-black">
          Women Collection
        </h1>

        <p className="mt-4">
          Luxury fashion for women
        </p>
      </div>

      <CategoryProducts category="Women" />

      <PremiumFooter />
    </>
  );
}

export default Women;