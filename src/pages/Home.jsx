import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SaleBanner from "../components/SaleBanner";
import TrustSection from "../components/TrustSection";

function Home() {
  return (
    <>
  <Navbar />
  <SaleBanner />
  <HeroSlider />
  <CategorySection />
  <FeaturedProducts />
  <TrustSection />
  <Newsletter />
  <Footer />
</>
  );
}

export default Home;