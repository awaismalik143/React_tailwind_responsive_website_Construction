import React from "react";
import logo from '../../../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#071026] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo + Short text */}
        <div className="flex flex-col gap-4 items-start">
          <img src={logo} alt="Logo" className="object-contain w-32" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="text-sm text-gray-300">198 West 21th Street, Suite 721 New York NY 10010</p>
          <p className="mt-2 text-sm text-gray-300">Phone: +95 (0) 123 456 789</p>
          <p className="mt-1 text-sm text-gray-300">Cell: +95 (0) 123 456 789</p>
        </div>

        {/* Column 4: Newsletter / CTA */}
        <div className="">
          <h4 className="text-lg font-semibold mb-4">Sign Up</h4>
          <p className="text-sm text-gray-300 mb-4">Enter your email to get updates.</p>
          <div className=" gap-5  flex flex-wrap sm:flex-col">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 w-[99%] bg-[#0b1726] border border-gray-700 placeholder-gray-400  py-2 rounded"
            />
            <button className=" py-2 bg-[#0b1726] border border-gray-700 rounded text-white font-semibold whitespace-nowrap">
              Sign Up
            </button>
          </div>

          <div className="mt-4 sm:mt-6 w-full sm:w-auto">
            <button className="w-full sm:w-auto text-sm py-2 border border-gray-700 rounded">
              Contact Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-2 sm:gap-0">
          <div>Copyright © {new Date().getFullYear()} All rights reserved. This template is made with ❤️ by Colorlib</div>
          <div>Designed for practice — change logo/image as needed</div>
        </div>
      </div>
    </footer>
  );
}
