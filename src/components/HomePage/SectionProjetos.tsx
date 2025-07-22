'use client';

import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import Image from 'next/image';

const SectionProjetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Pokédex",
      imagem: "/img/pokedex.png",
      github: "https://github.com/josuesoares64/pokedex",
      demo: "https://pokedex-cqfa.vercel.app/"
    },
    {
      id: 2,
      titulo: "Plataforma Streaming",
      imagem: "/img/plataforma-streaming.png",
      github: "https://github.com/josuesoares64/Plataforma-Streaming",
      demo: "https://plataforma-streaming-ecru.vercel.app/"
    },
    {
      id: 3,
      titulo: "Portfólio Advogado",
      imagem: "/img/pagina-advogado.png",
      github: "https://github.com/josuesoares64/portfolio-advogado",
      demo: "https://josuesoares64.github.io/portfolio-advogado/"
    },
    {
      id: 4,
      titulo: "Projeto Android",
      imagem: "/img/projeto-android.png",
      github: "https://github.com/josuesoares64/projeto-android",
      demo: "https://projeto-android-gules.vercel.app/"
    }
  ];

  return (
    <section id="SectionProjetos" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Título com animação opcional (se quiser remover, troque motion.h2 por h2) */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Projetos
        </motion.h2>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <motion.div
              key={projeto.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 25vw"
                />
              </div>
              
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">{projeto.titulo}</h3>
                <div className="flex gap-4">
                  <a 
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={`Código no GitHub - ${projeto.titulo}`}
                  >
                    <SiGithub className="text-2xl" />
                  </a>
                  <a 
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label={`Demo ao vivo - ${projeto.titulo}`}
                  >
                    <SlGlobe className="text-2xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionProjetos;