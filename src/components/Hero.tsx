"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          {profile.name}
        </h1>

        <p className="mt-6 text-lg text-gray-400">
          {profile.roles.join(" • ")}
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:opacity-80 transition"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="px-6 py-3 rounded-lg border border-gray-600 hover:bg-gray-900 transition"
          >
            About Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
