"use client";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Page() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-blue-500">Voltify</h2>
        <p className="text-gray-400 mt-2 text-lg">
          Your trusted online tech shop
        </p>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-4"></div>
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.facebook.com"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-blue-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="mt-8 text-gray-400 text-sm">
          &copy; 2024 Voltify. All rights reserved.
        </p>
        <p className="mt-2">
          <a
            href="https://www.flaticon.com/free-icons/user"
            title="user icons"
            className="text-gray-400 hover:text-blue-500 transition duration-300 text-sm"
          >
            User icons created by Freepik - Flaticon
          </a>
        </p>
      </div>
    </footer>
  );
}
