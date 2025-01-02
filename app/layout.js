"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/navigation/page";
import Footer from "./components/footer/page";
import { UserProvider } from "../app/context/UserContext"; 
import { metadata } from "./metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamicMetadata = metadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark:bg-gray-900 dark:text-white"`}
      >
        <UserProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </UserProvider>
      </body>
    </html>
  );
}
