function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-white">

          <p className="uppercase tracking-[8px] mb-4 text-sm">
            Luxury Collection 2026
          </p>

          <h1 className="text-7xl md:text-8xl font-black leading-none">
            Elevate
            <br />
            Your Style
          </h1>

          <p className="mt-8 max-w-xl text-lg text-gray-200">
            Discover premium fashion designed for
            modern lifestyles. Crafted with elegance,
            comfort and timeless luxury.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Shop Now
            </button>

            <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
              Explore Collection
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;