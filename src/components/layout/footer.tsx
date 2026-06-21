import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold mb-4">
              APIS
            </h2>

            <p className="text-slate-400 leading-7">
              Advanced Pharma IT Services providing
              industry-focused healthcare and pharmaceutical
              training programs.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/faq">FAQ</Link></li>

            </ul>

          </div>

          {/* Courses */}
          <div>

            <h3 className="font-semibold text-xl mb-5">
              Popular Courses
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>Pharmacovigilance</li>
              <li>Clinical Research</li>
              <li>Medical Coding</li>
              <li>Regulatory Affairs</li>
              <li>Clinical Data Management</li>
              <li>Clinical SAS</li>
              <li>Materiovigilance</li>
              <li>Pharma AI</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-semibold text-xl mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>📧 apistrainer@gmail.com</li>
              <li>📞 +91 6300014585</li>
              <li>📍 Dr. B. R. Ambedkar Konaseema District, Andhra Pradesh, India.</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 APIS. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-slate-400">

            <a href="https://chat.whatsapp.com/CXfHAdQxWWuDvXJkBUBRki">WhatsApp Community</a>
            <a href="https://www.instagram.com/apistrainer">Instagram</a>
            <a href="https://youtube.com/shorts/WMMzSp-J0ts?si=hQVI34144q0c1PW1">YouTube</a>

          </div>

        </div>

      </div>

    </footer>
  );
}