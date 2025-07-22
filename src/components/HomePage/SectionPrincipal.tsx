'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

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
  }, [subIndex, deletando, espera, index, frases]);

  return (
    <section id='SectionPrincipal' className="flex flex-col lg:flex-row w-full min-h-screen items-center justify-center pt-24 md:pt-0">
      {/* Text content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 lg:px-20 py-10 mt-0 md:mt-20 space-y-1 text-center lg:text-left">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-black text-white"
        >
          Olá! Eu sou o Josué Soares
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-green-600 text-base sm:text-lg md:text-4xl font-semibold min-h-[40px] sm:min-h-[50px] md:min-h-[60px]"
        >
          <span>
            {frases[index].substring(0, subIndex)}
            <span className="animate-pulse text-white">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center lg:justify-start gap-4 py-4 text-2xl sm:text-3xl"
        >
          <a 
            href="https://github.com/josuesoares64" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/josu%C3%A9-soares-b32713230/" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/josue_soares64?igsh=MWJsd2lqcGZrbmszbg==" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-400 transition-colors"
          >
            <FaInstagram />
          </a>
          <a 
            href="https://wa.me/558882199616" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gray-400 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/files/curriculo.desenvolvedor.pdf"
          download="Josue_Soares_Curriculo.pdf"
          className="bg-green-800 hover:bg-slate-400 w-full sm:w-60 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-300 text-center"
        >
          Baixar Currículo
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="w-full lg:w-1/2 flex items-center justify-center p-4"
      >
        <div className="relative w-40 sm:w-52 md:w-60 lg:w-72 aspect-square">
          <Image
            src="/img/Foto-do-desenvolvedor.png"
            alt="Josué Soares - Desenvolvedor FullStack"
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-contain rounded-lg shadow-md"
            priority
            quality={90}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default SectionPrincipal;