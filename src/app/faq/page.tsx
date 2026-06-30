"use client";

import { useState } from "react";

export default function FAQPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsApp = () => {
    if (!name || !mobile || !course) {
      alert("Please fill all required fields.");
      return;
    }

    const text = `Hello APIS Healthcare,

Name: ${name}
Mobile: ${mobile}
Interested Course: ${course}

Question:
${message}`;

    const phone = "916302692517"; // Replace with your WhatsApp number

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-20">
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-xl border p-8">
        <h1 className="text-4xl font-bold text-center mb-3">
          Enquiry Form
        </h1>

        <p className="text-center text-slate-600 mb-8">
          Fill in your details and our team will assist you on WhatsApp.
        </p>

        <div className="space-y-5">
          <input
            type="text"
            placeholder="Full Name *"
            className="w-full border rounded-xl p-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number *"
            className="w-full border rounded-xl p-4"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />

          <select
            className="w-full border rounded-xl p-4"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select Interested Course *</option>
            <option>Pharmacovigilance</option>
            <option>Clinical Research</option>
            <option>Medical Coding</option>
            <option>Clinical Data Management</option>
            <option>Regulatory Affairs</option>
            <option>SAS Programming</option>
            <option>Medical Writing</option>
          </select>

          <textarea
            rows={5}
            placeholder="Your Question (Optional)"
            className="w-full border rounded-xl p-4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            onClick={sendWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition"
          >
            Send on WhatsApp
          </button>
        </div>
      </div>
    </main>
  );
}