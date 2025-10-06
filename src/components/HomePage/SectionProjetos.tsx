'use client';

import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import Image from 'next/image';

const SectionProjetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Portfólio Advogado",
      imagem: "/img/pagina-advogado.png",
      github: "https://github.com/josuesoares64/portfolio-advogado",
      demo: "https://josuesoares64.github.io/portfolio-advogado/",
      width: 800,
      height: 450
    },
    {
      id: 2,
      titulo: "Plataforma MagazineHastagR",
      imagem: "/img/projeto-magazineHastagR.png",
      github: "https://github.com/josuesoares64/MagazineHashtagR",
      demo: "https://magazine-hashtag-r.vercel.app/",
      width: 800,
      height: 450
    },
    {
      id: 3,
      titulo: "Projeto Pizzaria",
      imagem: "/img/projeto-pizzaria.png",
      github: "https://github.com/josuesoares64/pizzaria-web",
      demo: "https://pizzaria-web-drab.vercel.app/",
      width: 800,
      height: 450
    },
    {
      id: 4,
      titulo: "Plataforma Streaming",
      imagem: "/img/plataforma-streaming.png",
      github: "https://github.com/josuesoares64/Plataforma-Streaming",
      demo: "https://plataforma-streaming-ecru.vercel.app/",
      width: 800,
      height: 450
    }
  ];

  return (
    <section id="SectionProjetos" className="py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Projetos
        </motion.h2>

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
                  alt={`Captura de tela do projeto ${projeto.titulo}`}
                  width={projeto.width}
                  height={projeto.height}
                  className="object-cover"
                  sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 25vw"
                  quality={85}
                  priority={projeto.id === 1} // Apenas a primeira imagem com prioridade
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
                    aria-label={`Ver código no GitHub - ${projeto.titulo}`}
                  >
                    <SiGithub className="text-2xl" />
                  </a>
                  <a 
                    href={projeto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    aria-label={`Ver demonstração ao vivo - ${projeto.titulo}`}
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