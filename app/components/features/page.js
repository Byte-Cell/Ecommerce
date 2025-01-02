"use client";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900 h-full flex flex-col relative">
      <div className="container-fluid mx-auto flex-1">
        <div className="w-full h-96 p-6 border-b flex-1">
          <div className="flex flex-row items-center mb-4">
            <h2 className="text-2xl font-bold dark:text-gray-400">About Our Store</h2>
            <span className="ml-2 text-2xl">🏪</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Welcome to Voltify! We offer a wide variety of high-quality products at great prices.
            Shop with us today and discover exclusive deals and offers!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="h-96 p-6 border-r border-b flex-1">
            <span className="text-2xl">📱</span>
            <h2 className="text-2xl font-bold dark:text-gray-400">Our Products</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our products range from all kinds of electronics, all carefully selected to ensure
              top quality. Enjoy browsing through our extensive catalog!
            </p>
          </div>

          <div className="h-96 p-6 border-b flex-1">
            <span className="text-2xl">❓</span>
            <h2 className="text-2xl font-bold mb-4 dark:text-gray-400">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We offer competitive prices, fast shipping, and excellent customer service. We value
              our customers and strive to provide the best online shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
