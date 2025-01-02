"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Man from "../../../public/user.png";
import Flash from "../../../public/flash.png";
import { useUser } from "../../context/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

export default function Navbar() {
  const { isSignedIn, setIsSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsSignedIn(true); 
    }
  }, [setIsSignedIn]);

  const handleSignOut = () => {
    localStorage.removeItem("authToken"); 
    setIsSignedIn(false);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setTheme(savedTheme || "light");
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg h-24 z-40 relative">
      <div className="container mx-auto flex items-center justify-between h-full px-4">
        <div className="flex flex-row text-3xl font-bold">
          <Image src={Flash} alt="Icon" className="w-10 h-10"/>
          <Link href="/" className="text-gray-700 dark:text-gray-400">
            Voltify
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
          >
            Contact
          </Link>
          {!isSignedIn ? (
            <Link
              href="/register"
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
            >
              Sign up
            </Link>
          ) : (
            <button
              onClick={handleSignOut}
              className="text-gray-700 hover:text-gray-900 dark:text-white dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded px-2 py-1"
            >
              Sign out
            </button>
          )}
          {isSignedIn && (
            <div className="relative">
              <Image
                src={Man}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
            </div>
          )}
          <button
            onClick={toggleTheme}
            className="text-gray-700 dark:text-white p-2 rounded-md"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <IoSunnyOutline className="text-yellow-500" />
            ) : (
              <IoMoonOutline className="text-blue-500" />
            )}
          </button>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-700 dark:text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md px-4 py-2">
          <Link
            href="/"
            className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            onClick={() => setIsMenuOpen(false)} 
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            onClick={() => setIsMenuOpen(false)} 
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            onClick={() => setIsMenuOpen(false)} 
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            onClick={() => setIsMenuOpen(false)} 
          >
            Contact
          </Link>
          {!isSignedIn ? (
            <Link
              href="/register"
              className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
              onClick={() => setIsMenuOpen(false)} 
            >
              Sign up
            </Link>
          ) : (
            <button
              onClick={() => {
                handleSignOut();
                setIsMenuOpen(false); 
              }}
              className="block p-2 text-gray-700 dark:text-white hover:text-gray-900 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 rounded"
            >
              Sign out
            </button>
          )}
          {isSignedIn && (
            <div className="relative flex justify-center items-center py-4 space-x-4">
              <div className="relative">
                <Image
                  src={Man}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
              </div>
              <button
                onClick={toggleTheme}
                className="text-gray-700 dark:text-white p-4 hover:bg-gray-200 rounded-md"
                aria-label="Toggle Theme"
              >
                {theme === "light" ? (
                  <IoSunnyOutline className="text-yellow-500" />
                ) : (
                  <IoMoonOutline className="text-blue-500" />
                )}
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
