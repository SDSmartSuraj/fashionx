function Collections() {
  const collections = [
    {
      title: "Men Collection",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1000",
    },
    {
      title: "Women Collection",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1000",
    },
    {
      title: "Luxury Collection",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-black text-center mb-16">
          Explore Collections
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {collections.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl h-[500px] cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/30"></div>

              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-3xl font-black">
                  {item.title}
                </h3>

                <button className="mt-4 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                  Explore
                </button>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Collections;