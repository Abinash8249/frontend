"use client"
import React, { useState } from "react";


export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    postcode: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://api.example.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit the form");
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className="bg-white from-gray-800 to-gray-900 min-h-screen py-12">
<h1 className="text-center text-4xl font-semibold m-4">Contact US</h1>
      <div className="grid md:grid-cols-2 items-center overflow-hidden shadow-lg rounded-3xl max-w-6xl mx-auto bg-white">
        <div className="p-8 bg-gray-900">
          <h2 className="text-3xl font-bold text-white">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-sm text-gray-300 mt-4 leading-relaxed">
            Have a specific inquiry or looking to explore new opportunities?
            Our experienced team is ready to engage with you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4 mt-8">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="text"
                name="street"
                placeholder="Street"
                value={formData.street}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                  className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
                />
              </div>
              <input
                type="number"
                name="phone"
                placeholder="Phone No."
                value={formData.phone}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="px-2 py-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
                className="px-2 pt-3 bg-transparent text-gray-300 w-full text-sm border-b border-gray-400 focus:border-yellow-400 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-8 flex items-center justify-center text-sm w-full rounded-md px-6 py-3 tracking-wide text-gray-800 bg-yellow-400 hover:bg-yellow-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 6l10 5v2l-10 5-10-5v-2l10-5zm-10 9v2l10 5 10-5v-2l-10 5-10-5z" />
              </svg>
              Send Message
            </button>
          </form>
        </div>

        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.3346174034796!2d85.76811608544068!3d20.286412164360236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190803f81ab1f7%3A0x7a9636d00c0cb2d6!2sOdisha%20Institute%20of%20Computer%20Application!5e0!3m2!1sen!2sin!4v1734625937285!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-tr-3xl rounded-br-3xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}