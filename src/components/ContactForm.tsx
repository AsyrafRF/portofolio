"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulasi submit
    setTimeout(() => {
      setLoading(false);
      alert("Message sent! (mock)");
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 space-y-4"
    >
      <div>
        <label className="block text-sm mb-1">Name</label>
        <input
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Message</label>
        <textarea
          required
          rows={4}
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-black border border-gray-300 dark:border-gray-700 focus:outline-none"
        />
      </div>

      <button
        disabled={loading}
        className="w-full py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black font-medium hover:opacity-80 transition disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
