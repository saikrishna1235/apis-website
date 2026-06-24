"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "916300014585"; // Replace with your number

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hi%20APIS%20Healthcare,%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      aria-label="WhatsApp Chat"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
