import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function PremiumFooter() {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-4xl font-black tracking-[6px]">
              FASHIONX
            </h2>

            <p className="mt-6 text-gray-400 leading-7">
              Premium fashion designed for
              modern lifestyles.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Shop
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Men</li>
              <li>Women</li>
              <li>Luxury</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-xl mb-5">
              Follow Us
            </h3>

            <div className="flex gap-5 text-2xl">

              <FaInstagram className="hover:scale-125 cursor-pointer transition" />

              <FaFacebook className="hover:scale-125 cursor-pointer transition" />

              <FaTwitter className="hover:scale-125 cursor-pointer transition" />

              <FaYoutube className="hover:scale-125 cursor-pointer transition" />

            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          © 2026 FASHIONX. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default PremiumFooter;