import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agreeToPolicy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Sprintfixer</h1>
        <p className="text-gray-600">
          Trusted hands, at your service.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Do you have a question, need help, or want to work with us? Leave us a message.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="First name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToPolicy"
                  name="agreeToPolicy"
                  type="checkbox"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
              </div>
              <label htmlFor="agreeToPolicy" className="ml-2 block text-sm text-gray-700">
                I agree to be contacted and have read the Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Info Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Sprintfixer - Trusted hands, at your service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Company info</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="/about" className="hover:text-blue-600">About Us</a></li>
                <li><a href="/register" className="hover:text-blue-600">Register as an artisan</a></li>
                <li><a href="/careers" className="hover:text-blue-600">We are hiring</a></li>
                <li><a href="/contact" className="hover:text-blue-600">Contact us</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li>In-app wallet</li>
                <li>Marketplace Access</li>
                <li>Live Chat</li>
                <li>Training and bootcamps</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>Copyright © 2025. All rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;