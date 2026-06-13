function BrandLogos() {
  const brands = [
    "NIKE",
    "ADIDAS",
    "PUMA",
    "LEVI'S",
    "ZARA",
    "H&M",
  ];

  return (
    <section className="py-20 bg-white border-y">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center uppercase tracking-[6px] text-gray-500 mb-10">
          Trusted Brands
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

          {brands.map((brand, index) => (
            <div
              key={index}
              className="text-center text-2xl font-black text-gray-300 hover:text-black transition"
            >
              {brand}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BrandLogos;