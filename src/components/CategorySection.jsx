function CategorySection() {
  const categories = [
    "Men",
    "Women",
    "Shoes",
    "Accessories",
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-5xl font-bold text-center mb-12">
        Shop By Category
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-white shadow-lg rounded-2xl p-10 text-center hover:scale-105 transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold">
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;