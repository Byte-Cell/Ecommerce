"use client";
import { CiMail, CiPhone, CiHome } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We&apos;d love to hear from you!</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500">Get in Touch</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg">
            Whether you have questions, feedback, or need assistance, we&apos;re here to help. 
            Fill out the form below or contact us via email or phone.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500 dark:text-gray-400">Contact Form</h2>
          <form className="mt-6 bg-white p-8 shadow-md rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-lg font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-lg font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 text-lg font-medium">Message</label>
              <textarea
                id="message"
                className="mt-2 w-full p-3 border border-gray-300 rounded-md resize-none"
                placeholder="Your message here"
                rows="5"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-500">Our Contact Information</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg">
            You can also reach us through the following methods:
          </p>
          <ul className="mt-4 list-none text-gray-700 dark:text-gray-400 text-lg">
            <li className="flex flex-row items-center mb-2">
              <CiMail /> 
              <p className="ml-1">Email: support@voltify.com</p>
            </li>
            <li className="flex flex-row items-center mb-2">
              <CiPhone />
              <p className="ml-1">Phone: +1 (800) 123-4567</p> 
            </li>
            <li className="flex flex-row items-center mb-2">
              <CiHome />
              <p className="ml-1">Address: 123 Tech Street, Silicon Valley, CA</p> 
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 dark:bg-gray-900 text-white dark:text-gray-400 py-8">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 Voltify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
