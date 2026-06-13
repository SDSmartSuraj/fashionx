function CategorySection() {
  const categories = [
    {
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    },
    {
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    },
    {
      name: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="text-center mb-14">
        <p className="uppercase tracking-[6px] text-gray-500">
          Categories
        </p>

        <h2 className="text-5xl md:text-6xl font-black mt-4">
          Shop By Category
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div
            key={item.name}
            className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition"></div>

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-3xl font-bold">
                {item.name}
              </h3>

              <p className="mt-2 opacity-80">
                Explore Collection →
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;