"use client";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-blue-500 text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">About Voltify</h1>
          <p className="mt-2 text-lg">Our mission is to bring the best in tech to your doorstep.</p>
        </div>
      </header>

      <main className="container mx-auto py-12 px-6">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500">Who We Are</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg">
            Voltify is your go-to destination for the latest and most trusted electronic gadgets. 
            Whether you&apos;re upgrading your home office or looking for the latest tech trends, 
            we strive to provide a seamless shopping experience with top-quality products.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="mt-4 text-gray-700 dark:text-gray-400 text-lg">
            At Voltify, we believe technology should empower and enrich your life. Our mission is to 
            provide you with the most innovative, reliable, and affordable electronic products on the market. 
            We aim to offer excellent customer service, ensuring every purchase is a positive experience.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-500">Why Choose Us?</h2>
          <ul className="mt-4 list-disc pl-5 text-gray-700 dark:text-gray-400 text-lg">
            <li>Wide selection of top-tier electronics</li>
            <li>Competitive pricing</li>
            <li>Excellent customer support</li>
            <li>Fast and secure shipping</li>
            <li>Customer satisfaction guaranteed</li>
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
