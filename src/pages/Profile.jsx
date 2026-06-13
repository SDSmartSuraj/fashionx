import Navbar from "../components/Navbar";

function Profile() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto p-10">
        <div className="bg-white rounded-3xl shadow-xl p-10">

          <div className="text-center">
            <img
              src="https://i.pravatar.cc/200"
              alt=""
              className="w-32 h-32 rounded-full mx-auto"
            />

            <h1 className="text-3xl font-bold mt-4">
              Suraj
            </h1>

            <p className="text-gray-500">
              suraj@email.com
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="bg-gray-100 p-6 rounded-2xl text-center">
              <h2 className="text-2xl font-bold">12</h2>
              <p>Orders</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl text-center">
              <h2 className="text-2xl font-bold">5</h2>
              <p>Wishlist</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl text-center">
              <h2 className="text-2xl font-bold">₹18,500</h2>
              <p>Spent</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;