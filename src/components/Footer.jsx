import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Sprintfixer</h4>
            <p className="text-gray-600 mb-4">
              Trusted artisans for your home or business needs.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-blue-600">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.5c-.8.3-1.5.5-2.4.6.9-.5 1.6-1.4 1.9-2.4-.9.5-1.9.9-2.9 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.5-.6 2.4 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.6 0 2.2 1.6 4 3.7 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.4 4.6 3.4-1.7 1.3-3.8 2.1-6.1 2.1-.4 0-.8 0-1.2-.1 2 1.3 4.4 2 6.9 2 8.3 0 12.8-6.9 12.8-12.8 0-.2 0-.4 0-.6.9-.6 1.6-1.4 2.2-2.3z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Our Story', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Services</h4>
            <ul className="space-y-2">
              {['Plumbers', 'Electricians', 'Carpenters', 'Cleaners', 'AI Managers'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h4>
            <address className="text-gray-600 not-italic">
              <p className="mb-2">123 Artisan Street</p>
              <p className="mb-2">Lagos, Nigeria</p>
              <p className="mb-2">hello@sprintfixer.com</p>
              <p>+234 800 000 0000</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sprintfixer. All rights reserved.</p>
          <p className="mt-2">Apple Business Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;