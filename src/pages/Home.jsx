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

<section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')",
  }}
>
  <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative z-10">
    <HeroSlider />
  </div>
</section>
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