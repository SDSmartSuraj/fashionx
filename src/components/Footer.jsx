import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-4xl font-black tracking-[8px]">
            FASHIONX
          </h2>

          <p className="text-gray-400 mt-6">
            Premium fashion crafted for modern
            lifestyle and luxury streetwear lovers.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-bold text-xl mb-6">
            Shop
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Men</li>
            <li>Women</li>
            <li>Shoes</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-xl mb-6">
            Support
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Contact Us</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-xl mb-6">
            Join Our Newsletter
          </h3>

          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 rounded-l-xl text-black"
            />

            <button className="bg-white text-black px-6 rounded-r-xl font-bold">
              Join
            </button>
          </div>

          <div className="flex gap-5 mt-8 text-2xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-gray-500">
        © 2026 FASHIONX. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;