function Shop() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-8">
        Shop
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        className="border p-3 rounded-lg w-full mb-6"
      />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white shadow rounded-xl p-5">
          Product Card
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          Product Card
        </div>

        <div className="bg-white shadow rounded-xl p-5">
          Product Card
        </div>
      </div>
    </div>
  );
}

export default Shop;