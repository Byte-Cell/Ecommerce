"use client"
import Banner from "../banner/page";
import Features from "../features/page";

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <Banner />
      <Features />
    </div>
  );
}
