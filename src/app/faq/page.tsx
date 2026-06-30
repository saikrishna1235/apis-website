"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need a Life Science background?",
    answer:
      "Most of our courses are designed for Life Science graduates such as B.Pharmacy, M.Pharmacy, Pharm.D, B.Sc, M.Sc, Biotechnology, Nursing, MBBS and related fields.",
  },
  {
    question: "Are classes online or offline?",
    answer:
      "We offer both online and classroom training depending on the course and batch availability.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide interview preparation, resume building, mock interviews and placement assistance.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every successful candidate receives a course completion certificate from APIS Healthcare.",
  },
];

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

    // Replace with your WhatsApp number
    const phone = "916300014585";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Find answers to common questions or send us your enquiry directly.
      </p>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* FAQ */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="border rounded-xl p-5 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold text-lg">
                {faq.question}
              </summary>

              <p className="mt-4 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border">
          <h2 className="text-3xl font-bold mb-6">
            Still Have Questions?
          </h2>

          <div className="space-y-5">
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full border rounded-lg p-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="tel"
              placeholder="Mobile Number *"
              className="w-full border rounded-lg p-3"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            <select
              className="w-full border rounded-lg p-3"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select Course *</option>

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
              placeholder="Write your question..."
              className="w-full border rounded-lg p-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              onClick={sendWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition"
            >
              Send on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}