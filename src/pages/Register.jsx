import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen grid md:grid-cols-2">

      {/* Left Side */}
      <div
        className="hidden md:flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white text-center">
          <h1 className="text-7xl font-bold">
            FASHIONX
          </h1>

          <p className="mt-4 text-2xl">
            Join The Premium Fashion Club
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl w-full max-w-md text-white">

          <h2 className="text-5xl font-bold text-center mb-2">
            Create Account
          </h2>

          <p className="text-center text-gray-300 mb-8">
            Join FashionX Premium
          </p>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/20 outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/20 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 rounded-xl bg-black/30 border border-white/20 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 mb-6 rounded-xl bg-black/30 border border-white/20 outline-none"
          />

          <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:scale-105 transition">
            Create Account
          </button>

          <div className="grid grid-cols-2 gap-4 mt-5">
            <button className="border border-white/20 py-3 rounded-xl">
              Google
            </button>

            <button className="border border-white/20 py-3 rounded-xl">
              Apple
            </button>
          </div>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-white"
            >
              Login
            </Link>
          </p>

        </div>

      </div>
    </div>
  );
}

export default Register;