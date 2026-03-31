"use client"
import { useState, useEffect } from "react";
import UserNav from "./UserNav";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detecta scroll para aumentar opacidade do header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 right-0 py-4 px-4 z-50 transition-all duration-300
        ${scrolled
          ? "bg-[#0d1117] bg-opacity-90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
          : "bg-[#0d1117] bg-opacity-30 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#SectionPrincipal" className="flex-shrink-0" onClick={closeMenu}>
          <h1 className="font-lobster text-white text-2xl md:text-3xl tracking-wider">
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
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation — overlay com animação suave */}
      <div
        className={`md:hidden fixed inset-0 z-40 mt-[64px] transition-all duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          onClick={closeMenu}
        />

        {/* Menu panel */}
        <nav
          className={`relative bg-[#0d1117] bg-opacity-98 backdrop-blur-md p-8 transition-transform duration-300
            ${isOpen ? "translate-y-0" : "-translate-y-4"}`}
        >
          <UserNav mobile onClose={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;