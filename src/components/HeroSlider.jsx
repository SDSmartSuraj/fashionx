import { motion } from "framer-motion";
function HeroSlider() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-center text-white"
>
  <h1 className="text-7xl md:text-8xl font-black">
    Elevate Your Style
  </h1>

  <p className="mt-6 text-xl">
    Luxury Fashion For Modern Lifestyle
  </p>

  <motion.button
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="mt-10 bg-white text-black px-8 py-4 rounded-full font-bold"
  >
    Shop Now
  </motion.button>
</motion.div>
  );
}

export default HeroSlider;