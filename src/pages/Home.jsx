import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SaleBanner from "../components/SaleBanner";
import TrustSection from "../components/TrustSection";
import PremiumFooter from "../components/PremiumFooter";
import TrendingCollection from "../components/TrendingCollection";
import Collections from "../components/Collections";
import BrandStory from "../components/BrandStory";
import StatsSection from "../components/StatsSection";
import BrandLogos from "../components/BrandLogos";
import InstagramGallery from "../components/InstagramGallery";
import LuxuryMarquee from "../components/LuxuryMarquee";
import Testimonials from "../components/Testimonials";
function Home() {
  return (
    <>
  <Navbar />

<SaleBanner />

<HeroSlider />
<LuxuryMarquee />
<TrendingCollection />

<CategorySection />

<FeaturedProducts />

<InstagramGallery />

<BrandStory />

<BrandLogos />

<StatsSection />

<TrustSection />
<Testimonials />
<Newsletter />

<PremiumFooter />
  
</>
  );
}

export default Home;