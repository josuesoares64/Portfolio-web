"use client"
import { useState } from "react";
import Link from "next/link";
import UserNav from "./UserNav";
import { HiMenu, HiX } from "react-icons/hi"; // Ícones de menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex shadow-xl/30 shadow-green-300/50 bg-green-800 bg-opacity-5 fixed w-full py-6 px-4 justify-between items-center z-50">
      <Link href="/">
        <h1 className="text-white font-bold uppercase text-2xl">Josué Soares</h1>
      </Link>

      {/* Menu desktop */}
      <nav className="hidden md:flex gap-6">
        <UserNav />
      </nav>

      {/* Botão hambúrguer no mobile */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="absolute top-full right-0 bg-green-800 w-full flex flex-col items-center py-4 gap-4 md:hidden">
          <UserNav />
        </nav>
      )}
    </header>
  );
};

export default Header;
