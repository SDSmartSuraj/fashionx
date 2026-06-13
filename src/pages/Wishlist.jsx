import Navbar from "../components/Navbar";
import useWishlistStore from "../store/wishlistStore";

function Wishlist() {
  const wishlist = useWishlistStore(
    (state) => state.wishlist
  );

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-10">
        <h1 className="text-5xl font-bold mb-10">
          My Wishlist ❤️
        </h1>

        {wishlist.length === 0 ? (
          <h2>No products in wishlist</h2>
        ) : (
          <div className="grid md:grid-cols-4 gap-8">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-4">
                  <h2 className="font-bold">
                    {item.name}
                  </h2>

                  <p>₹{item.price}</p>

                  <button
                    onClick={() =>
                      removeFromWishlist(item.id)
                    }
                    className="w-full mt-4 bg-red-500 text-white py-3 rounded-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Wishlist;