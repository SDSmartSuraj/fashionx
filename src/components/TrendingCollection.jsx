function TrendingCollection() {
  const collections = [
    {
      title: "MEN COLLECTION",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200",
    },
    {
      title: "WOMEN COLLECTION",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-14">
          Trending Collection
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[550px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <h3 className="text-4xl font-bold mb-4">
                  {item.title}
                </h3>

                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold">
                  Explore Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrendingCollection;