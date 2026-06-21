export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20">

      <h1 className="text-5xl font-bold mb-10">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <h2 className="text-2xl font-bold mb-4">
            Get in Touch
          </h2>

          <p>Email: apistrainer@gmail.com</p>
          <p>Phone: +91 6300014585</p>
        </div>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Name"
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border p-4 rounded-lg"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}