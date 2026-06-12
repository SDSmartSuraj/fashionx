function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Hoodie",
      price: "₹2499",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    },
    {
      id: 2,
      name: "Luxury Shirt",
      price: "₹1999",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800",
    },
    {
      id: 3,
      name: "Casual Jacket",
      price: "₹3499",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800",
    },
    {
      id: 4,
      name: "Oversized Tee",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <h2 className="text-5xl font-bold text-center mb-12">
        Featured Products
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.price}
              </p>

              <button className="w-full mt-4 bg-black text-white py-3 rounded-xl">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;