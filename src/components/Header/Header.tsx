"use client"
import { useState } from "react";
import UserNav from "./UserNav";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 right-0 py-4 px-4 bg-slate-700 bg-opacity-20 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#SectionPrincipal" className="flex-shrink-0">
          <h1 className="font-lobster text-2xl md:text-3xl tracking-wider">
            Josué Soares
          </h1>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <UserNav />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-0 bg-black bg-opacity-70 z-40 mt-16 transition-opacity duration-300`}>
        <nav className="bg-slate-700 bg-opacity-40 p-6 animate-slideDown">
          <UserNav mobile />
        </nav>
      </div>
    </header>
  );
};

export default Header;