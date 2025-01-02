"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleCreateAccount = () => {
    router.push(`/register?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="bg-white h-screen border-b flex flex-col items-center justify-center px-4 relative dark:bg-gray-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-400 text-center">
        Welcome to <span className="text-yellow-500">Volt</span>ify
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-8 text-sm sm:text-base">
        Discover the best deals on our wide range of products. Create an account
        today to unlock exclusive offers and a personalized shopping experience!
      </p>
      <div className="w-full max-w-sm sm:max-w-md">
        <input
          type="email"
          placeholder="Enter your email to register"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-500 dark:text-gray-400"
        />
        <button
          onClick={handleCreateAccount}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
