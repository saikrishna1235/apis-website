"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <Image
        src="/images/hero-banner.jpg"
        alt="APIS Hero"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 via-blue-800/75 to-emerald-700/80" />

      <div className="relative z-10 text-center text-white px-4 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[6px] mb-4 text-emerald-300 font-medium"
        >
          Advanced Pharma IT Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-extrabold mb-6"
        >
          APIS
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-2xl md:text-5xl font-semibold mb-6"
        >
          From Learning to Leadership
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-slate-100"
        >
          Empowering Future Pharma & Healthcare Professionals
          through industry-focused training, practical skills,
          and career development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            className="
            bg-emerald-500
            hover:bg-emerald-600
            px-8 py-4 rounded-xl
            font-semibold
            transition-all duration-300
            hover:scale-105
            shadow-lg
            "
          >
            Explore Courses
          </button>

          <button
            className="
            border border-white
            px-8 py-4 rounded-xl
            hover:bg-white
            hover:text-slate-900
            transition-all duration-300
            hover:scale-105
            "
          >
            Contact Us
          </button>
        </motion.div>

      </div>
    </section>
  );
}