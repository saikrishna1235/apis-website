export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">Contact Us</h1>

      <p className="text-lg text-gray-600 mb-12">
        Connect with APIS and stay updated with industry insights, career
        guidance, educational content, and training opportunities.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">📞 Phone</h3>
              <p className="text-gray-700">+91 6300014585</p>
            </div>

            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold">📧 Email</h3>
              <p className="text-gray-700">apistrainer@gmail.com</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-6">
            Connect with APIS
          </h2>

          <div className="space-y-4">
            <a
              href="https://youtube.com/shorts/WMMzSp-J0ts?si=hQVI34144q0c1PW1"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              ▶️ YouTube
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61564309648003"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              📘 Facebook
            </a>

            <a
              href="https://www.instagram.com/apistrainer"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              📸 Instagram
            </a>

            <a
              href="https://t.me/+QAXPclZcR_0wZjA1"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              📢 Telegram
            </a>

            <a
              href="https://chat.whatsapp.com/CXfHAdQxWWuDvXJkBUBRki"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg hover:bg-gray-50 transition"
            >
              💬 WhatsApp Community
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full border p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}