"use client";

import { useState } from "react";
import Link from "next/link";
import EnrollmentModal from "@/components/ui/enrollment-modal";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[9999] backdrop-blur-xl bg-white/90 border-b border-slate-200 shadow-sm">

        <div className="container mx-auto px-6">

          <div className="flex items-center justify-between h-20">

            {/* Logo */}
<Link href="/" className="flex items-center">
  <div className="relative w-20 h-20">
    <Image
      src="/images/logo.png"
      alt="APIS Logo"
      fill
      priority
      className="object-contain"
    />
  </div>
</Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-10">

              <Link
                href="/"
                className="relative font-medium text-slate-700 hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-600
                after:transition-all
                hover:after:w-full"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="relative font-medium text-slate-700 hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-600
                after:transition-all
                hover:after:w-full"
              >
                About
              </Link>

              <Link
                href="/courses"
                className="relative font-medium text-slate-700 hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-600
                after:transition-all
                hover:after:w-full"
              >
                Courses
              </Link>

              <Link
                href="/faq"
                className="relative font-medium text-slate-700 hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-600
                after:transition-all
                hover:after:w-full"
              >
                FAQ
              </Link>

              <Link
                href="/contact"
                className="relative font-medium text-slate-700 hover:text-blue-600 transition
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-blue-600
                after:transition-all
                hover:after:w-full"
              >
                Contact
              </Link>

            </nav>

            {/* Desktop CTA */}
            <button
  onClick={() => setModalOpen(true)}
  className="hidden md:flex items-center justify-center bg-[#0D6EFD] hover:bg-[#0B5ED7] text-white px-7 py-3 rounded-xl font-semibold shadow-lg hover:shadow-blue-200 transition-all duration-300 hover:-translate-y-1"
>
  Enroll Now
</button>

            {/* Mobile Button */}
            <button
              className="md:hidden text-3xl text-slate-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "✕" : "☰"}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >

          <nav className="flex flex-col p-6 gap-5">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              Courses
            </Link>

            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="font-medium text-slate-700 hover:text-blue-600"
            >
              Contact
            </Link>

            <button
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false);
              }}
              className="mt-3 bg-gradient-to-r from-slate-900 via-blue-800 to-cyan-700 text-white py-3 rounded-xl font-semibold shadow-lg"
            >
              Enroll Now
            </button>

          </nav>

        </div>

      </header>

      <EnrollmentModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}