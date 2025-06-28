import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just clear and show a thank you message
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Left Panel */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 flex flex-col justify-center p-12 shadow-lg">
        <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-cyan-400">Contact Me</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Have a question or want to work together? Fill out the form and I'll get back to you shortly.
        </p>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-600 dark:text-cyan-400 text-xl" />
            <a href="mailto:youremail@example.com" className="hover:underline">
              youremail@example.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-blue-600 dark:text-cyan-400 text-xl" />
            <a href="tel:+880123456789" className="hover:underline">
              +880 1234 56789
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-blue-600 dark:text-cyan-400 text-xl" />
            <span>Daffodil International University, Dhaka, Bangladesh</span>
          </div>

          <div className="flex space-x-6 text-blue-600 dark:text-cyan-400 text-2xl mt-8">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-800 dark:hover:text-cyan-600">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-800 dark:hover:text-cyan-600">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-blue-800 dark:hover:text-cyan-600">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel (Form) */}
      <div className="md:w-1/2 bg-white dark:bg-gray-800 flex flex-col justify-center p-12 shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Write your message here..."
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-blue-600 dark:bg-cyan-500 text-white font-semibold hover:bg-blue-700 dark:hover:bg-cyan-600 transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="mt-4 text-green-600 dark:text-green-400 font-medium">
              Thanks for reaching out! I will get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
