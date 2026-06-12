import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      style={{
        height: "90vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        paddingLeft: "100px",
        color: "white",
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1
          style={{
            fontSize: "70px",
            marginBottom: "20px",
          }}
        >
          NEW COLLECTION
        </h1>

        <p
          style={{
            fontSize: "22px",
            marginBottom: "20px",
          }}
        >
          Luxury Fashion For Everyone
        </p>

        <button
          style={{
            padding: "15px 40px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;