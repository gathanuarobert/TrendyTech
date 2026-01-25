import React, { useEffect, useRef, useState } from "react";

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

  // 🔁 Create seamless loop slides
  const slides = [
    products[products.length - 1],
    ...products,
    products[0],
  ];

  const [index, setIndex] = useState(1); // start at first real slide
  const [animate, setAnimate] = useState(true);

  const startX = useRef(0);
  const isDragging = useRef(false);

  // 🔥 Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // 🧠 Seamless snapping (no backward jump)
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index, slides.length]);

  // Re-enable animation after snap
  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  // 👉 Swipe handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchEnd = (e) => {
    if (!isDragging.current) return;
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();

    isDragging.current = false;
  };

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

      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
        <div className="max-w-xl z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Smart Electronics for a{" "}
            <span className="text-yellow-400">Smarter Life</span>
          </h2>
          <p className="mt-6 text-gray-300">
            Premium CCTV cameras, smartphones and TVs — security and
            entertainment in one place.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Explore Products
            </button>
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>

        {/* ✅ Side Images (UNCHANGED) */}
        <div className="relative mt-16 md:mt-0 md:w-1/2 flex justify-center">
          <div className="absolute w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
          <div className="relative flex items-end space-x-6">
            <img
              src="https://images.unsplash.com/photo-1589935447067-5531094415d1"
              className="w-32 md:w-40 rounded-xl rotate-[-8deg]"
            />
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              className="w-32 md:w-40 rounded-xl z-10"
            />
            <img
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
              className="w-40 md:w-48 rounded-xl rotate-6"
            />
          </div>
        </div>
      </section>

      {/* 🔥 Seamless Carousel */}
      <section className="px-6 md:px-16 py-24">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
          FEATURED <span className="text-yellow-400">PRODUCTS</span>
        </h3>

        <div
          className="relative max-w-6xl mx-auto overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${
              animate ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((product, i) => (
              <div key={i} className="min-w-full flex justify-center px-4">
                <div className="w-[320px] md:w-[420px] h-[340px] bg-[#0f0f0f] border border-yellow-400 rounded-3xl shadow-[0_0_40px_rgba(250,204,21,0.2)] flex flex-col items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-56 h-40 object-contain mb-6"
                  />
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              onClick={prevSlide}
              className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Prev
            </button>
            <button
              onClick={nextSlide}
              className="px-5 py-2 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 md:px-16 py-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between">
        <p>© {new Date().getFullYear()} TrendyTech. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-yellow-400 cursor-pointer">Privacy</span>
          <span className="hover:text-yellow-400 cursor-pointer">Terms</span>
          <span className="hover:text-yellow-400 cursor-pointer">Support</span>
        </div>
      </footer>
    </div>
  );
}
// This code defines a LandingPage component with a navbar, hero section, seamless carousel, and footer.