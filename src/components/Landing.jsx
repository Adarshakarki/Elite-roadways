import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#E1EACD] flex flex-col">
      <header className="bg-[#E1EACD] text-[#2A004E] font-bold">
        <div className="header-container flex items-center justify-between w-full px-6 py-3 m-0">
          <div className="logo">
            <img src="/logo.png" alt="Logo" className="max-w-[100px]" />
          </div>
          <nav className="nav-links flex space-x-6">
            <Link
              to="/about"
              className="text-[#8D77AB] text-xl transition-all duration-200 ease-in-out hover:text-[#2A004E] hover:border-b-2 hover:border-[#2A004E]"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-[#8D77AB] text-xl transition-all duration-200 ease-in-out hover:text-[#2A004E] hover:border-b-2 hover:border-[#2A004E]"
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="text-[#8D77AB] text-xl transition-all duration-200 ease-in-out hover:text-[#2A004E] hover:border-b-2 hover:border-[#2A004E]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center mt-0 bg-[#E1EACD]">
        <section className="hero flex items-center justify-between gap-10 w-full px-6 py-10">
          <div className="text-content text-[#2A004E] max-w-[50%] mr-10">
            <h1 className="text-5xl font-extrabold mb-4 text-left">Reclaim your time</h1>
            <p className="text-xl font-bold mb-5 text-left">Book bus tickets online in just a few clicks</p>
            <Link 
    to="/signup" 
    className="cta-button inline-block py-3 px-6 rounded-full text-xl font-semibold text-[#8D77AB] border-2 border-[#8D77AB] transition-all duration-200 ease-in-out hover:bg-[#2A004E] hover:border-[#2A004E] hover:text-white mr-5"
  >
    Get Started
  </Link>
  <Link
  to="/login"
  className="cta-button inline-block py-3 px-6 rounded-full text-xl font-semibold text-[#8D77AB] border-2 border-[#8D77AB] transition-all duration-200 ease-in-out hover:bg-[#2A004E] hover:border-[#2A004E] hover:text-white"
  >
    Login
  </Link>
          </div>
          <div className="image-content flex-1 overflow-hidden relative">
            <img
              src="home-image.png"
              alt="Home Image"
              className="w-[200%] h-auto rounded-lg object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
