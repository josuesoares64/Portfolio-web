"use client"
import { useState } from "react";
import UserNav from "./UserNav";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 right-0 py-4 px-4 bg-green-800 bg-opacity-5 shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <a href="#SectionPrincipal" className="flex-shrink-0">
          <h1 className="text-white font-lobster text-2xl md:text-3xl tracking-wider">
            Josué Soares
          </h1>
        </a>

        <nav className="hidden md:flex gap-6">
          <UserNav />
        </nav>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 z-40 mt-16">
          <nav className="bg-green-800 p-4">
            <UserNav mobile />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
