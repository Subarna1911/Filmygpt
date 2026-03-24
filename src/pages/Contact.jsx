import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Mocking an API call with a timeout
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full min-h-screen bg-[#141414] text-white pt-28 pb-12 px-4 md:px-8 flex justify-center items-center">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-black/60 p-8 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-md">
        
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Have questions, feedback, or need support? We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✉</span> support@filmygpt.com
            </p>
            <p className="flex items-center gap-3">
              <span className="text-red-500 text-xl">📍</span> 123 Cinematic Ave, Hollywood, CA
            </p>
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 min-h-[350px]">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-pulse">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
              <p className="text-gray-400">Thanks for reaching out. We will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-gray-800/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-gray-800/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-700 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300 mt-2"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;
