import React, { useState, useEffect } from "react";

export default function LandingPage() {
  const products = [
    {
      name: "Smart CCTV Camera",
      image:
        "https://images.unsplash.com/photo-1590613607026-15c463e30ca5?q=80&w=387",
    },
    {
      name: "Smart TV",
      image:
        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=400",
    },
    {
      name: "Smartphone",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400",
    },
    {
      name: "Security System",
      image:
        "https://images.unsplash.com/photo-1589935447067-5531094415d1?q=80&w=400",
    },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [products.length]);

  const prev = (active - 1 + products.length) % products.length;
  const next = (active + 1) % products.length;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        <h1 className="text-2xl font-bold text-yellow-400">
          Trendy<span className="text-white">Tech</span>
        </h1>
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">Products</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Shop Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <div className="max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Smart Electronics for a{" "}
            <span className="text-yellow-400">Smarter Life</span>
          </h2>
          <p className="mt-6 text-gray-300">
            Discover premium CCTV cameras, smartphones, and TVs designed to keep
            you connected, secure, and entertained — all in one place.
          </p>
          <div className="mt-8 flex space-x-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Explore Products
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative mt-16 md:mt-0 md:w-1/2 flex justify-center items-center">
          <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

          <div className="relative flex items-end space-x-6">
            <img
              src="https://images.unsplash.com/photo-1589935447067-5531094415d1?w=500"
              alt="CCTV Camera"
              className="w-32 md:w-40 rounded-xl shadow-lg rotate-[-8deg]"
            />
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              alt="Smartphone"
              className="w-32 md:w-40 rounded-xl shadow-2xl z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
              alt="Television"
              className="w-40 md:w-48 rounded-xl shadow-lg rotate-6"
            />
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="px-6 md:px-16 py-24 bg-black">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
          FEATURED <span className="text-yellow-400">PRODUCTS</span>
        </h3>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[360px] flex items-center justify-center gap-8">
            <div className="hidden md:flex w-[260px] h-[300px] bg-[#111] border border-gray-800 rounded-2xl opacity-60 scale-90 items-center justify-center">
              <img
                src={products[prev].image}
                alt={products[prev].name}
                className="w-44 h-32 object-contain"
              />
            </div>

            <div className="w-[320px] md:w-[420px] h-[320px] bg-[#0f0f0f] border border-yellow-400 rounded-3xl shadow-[0_0_40px_rgba(250,204,21,0.2)] flex flex-col items-center justify-center">
              <img
                src={products[active].image}
                alt={products[active].name}
                className="w-56 h-40 object-contain mb-6"
              />
              <h4 className="text-lg font-semibold">
                {products[active].name}
              </h4>
            </div>

            <div className="hidden md:flex w-[260px] h-[300px] bg-[#111] border border-gray-800 rounded-2xl opacity-60 scale-90 items-center justify-center">
              <img
                src={products[next].image}
                alt={products[next].name}
                className="w-44 h-32 object-contain"
              />
            </div>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={() => setActive(prev)}
              className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Prev
            </button>
            <button
              onClick={() => setActive(next)}
              className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Next
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === active ? "bg-yellow-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-16 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} TrendyTech. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">Privacy</span>
          <span className="hover:text-yellow-400 cursor-pointer">Terms</span>
          <span className="hover:text-yellow-400 cursor-pointer">Support</span>
        </div>
      </footer>
    </div>
  );
}
