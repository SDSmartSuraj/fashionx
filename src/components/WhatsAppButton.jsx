import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/916380643416"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}

export default WhatsAppButton;