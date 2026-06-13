function InstagramGallery() {
  const images = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
  ];

  return (
    <section
  data-aos="fade-up"
  className="py-24 bg-white"
>
      <div className="text-center mb-12">
        <p className="uppercase tracking-[6px] text-gray-500">
          Follow Us
        </p>

        <h2 className="text-5xl font-black mt-4">
          Instagram Style
        </h2>

        <p className="text-gray-500 mt-4">
          Daily fashion inspiration from our latest collections
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 max-w-7xl mx-auto px-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={img}
              alt="Fashion"
              className="w-full h-[320px] object-cover hover:scale-110 transition duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InstagramGallery;