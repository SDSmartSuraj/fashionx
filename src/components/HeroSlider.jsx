function HeroSlider() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')",
      }}
    >
      <div className="bg-black/50 h-full w-full flex items-center">
        <div className="max-w-7xl mx-auto px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            NEW SEASON
            <br />
            COLLECTION
          </h1>

          <p className="text-lg md:text-2xl mb-8">
            Premium Fashion For Men & Women
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;