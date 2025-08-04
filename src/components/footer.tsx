"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              className="w-32 h-auto mb-4"
              src="/images/logo-let.png"
              width={128}
              height={40}
              alt="SolaTech Logo"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Health and Fitness software development using cutting-edge technology to
              improve the quality of life. Empowering healthcare organizations with
              enterprise-grade solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Media Icons */}
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h6 className="text-white font-semibold text-sm mb-4">Company</h6>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h6 className="text-white font-semibold text-sm mb-4">Support</h6>
            <ul className="space-y-3">
              <li>
                <a href="#help" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SolaTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#security" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              Security
            </a>
            <a href="#compliance" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              HIPAA Compliance
            </a>
            <a href="#status" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
              System Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;