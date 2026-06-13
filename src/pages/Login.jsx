import { Link } from "react-router-dom";
import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-black">

      {/* Left Side */}
      <div
        className="hidden lg:flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1400')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white text-center px-10">
          <h1 className="text-6xl font-bold mb-6">
            FASHIONX
          </h1>

          <p className="text-xl">
            Luxury Fashion For Modern Lifestyle
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-5xl font-extrabold text-white text-center tracking-wide">
            Welcome Back
          </h2>

          <p className="text-center text-gray-400 mt-2">
            Sign in to continue
          </p>

          <div className="space-y-5 mt-8">

            <input
  type="email"
  placeholder="Email Address"
  className="w-full border border-white/20 bg-black/30 text-white placeholder-gray-400 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white transition"
/>

           <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full border border-white/20 bg-black/30 text-white placeholder-gray-400 p-4 rounded-xl outline-none focus:ring-2 focus:ring-white transition"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-4 text-gray-300 hover:text-white"
  >
    👁️
  </button>
</div>
<div className="flex justify-between items-center text-sm">
  <label className="flex items-center gap-2 text-gray-300">
    <input type="checkbox" />
    Remember Me
  </label>

  <button
    type="button"
   className="text-gray-300 hover:text-white"
  >
    Forgot Password?
  </button>
</div>

            <button className="w-full py-4 rounded-xl bg-white text-black font-bold hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              Login
            </button>

            <div className="flex gap-4">

              <button className="flex-1 py-3 rounded-xl bg-white/10 text-white border border-gray-700 flex items-center justify-center gap-2">
                <FaGoogle />
                Google
              </button>

              <button className="flex-1 py-3 rounded-xl bg-white/10 text-white border border-gray-700 flex items-center justify-center gap-2">
                <FaApple />
                Apple
              </button>

            </div>

            <p className="text-center text-gray-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-white font-semibold"
              >
                Register
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;