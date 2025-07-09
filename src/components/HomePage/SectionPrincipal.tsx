'use client';

import { useState, useEffect } from 'react';
import img from '/public/img/Foto-do-desenvolvedor.png';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const SectionPrincipal = () => {
  const frases = [
    "Desenvolvedor Web",
    "Construindo soluções"
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deletando, setDeletando] = useState(false);
  const [espera, setEspera] = useState(false);

  useEffect(() => {
    if (espera) return;

    const timeout = setTimeout(() => {
      setSubIndex((prev) => deletando ? prev - 1 : prev + 1);

      if (!deletando && subIndex === frases[index].length) {
        setEspera(true);
        setTimeout(() => setEspera(false), 1500);
        setDeletando(true);
      }

      if (deletando && subIndex === 0) {
        setDeletando(false);
        setIndex((prev) => (prev + 1) % frases.length);
      }
    }, deletando ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, deletando, espera]);

  return (
      <section className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center">
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 lg:px-20 py-10 mt-0 md:mt-20 space-y-1 text-center lg:text-left">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white">
      Olá! Eu sou o Josué Soares
    </h2>

    <div className="text-green-600 text-base sm:text-lg md:text-4xl font-semibold min-h-[40px] sm:min-h-[50px] md:min-h-[60px]">
      <span>
        {frases[index].substring(0, subIndex)}
        <span className="animate-pulse text-white">|</span>
      </span>
    </div>

    <div className="flex justify-center lg:justify-start gap-4 py-4 text-2xl sm:text-3xl">
      <a href="#" className="hover:text-gray-400"><FaGithub /></a>
      <a href="#" className="hover:text-gray-400"><FaLinkedin /></a>
      <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
      <a href="#" className="hover:text-gray-400"><FaWhatsapp /></a>
    </div>

    <a
      href="/files/curriculo.desenvolvedor.pdf"
      download="Josue_Soares_Curriculo.pdf"
      className="bg-green-600 hover:bg-green-700 w-full sm:w-60 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-300 text-center"
    >
      Baixar Currículo
    </a>
  </div>

  {/* Imagem depois */}
  <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
    <img
      src="/img/Foto-do-desenvolvedor.png"
      alt="Foto do desenvolvedor"
      className="w-40 sm:w-52 md:w-60 lg:w-72 h-auto object-contain rounded-lg shadow-md"
    />
  </div>
</section>


  );
};

export default SectionPrincipal;
