'use client';

import { motion } from 'framer-motion';
import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import Image from 'next/image';
import FormFooter from '../Footer/FormFooter';

const SectionProjetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Sistema ERP Autoflex",
      descricao: "Sistema de planejamento de produção com algoritmo de alocação otimizada de recursos e simulação de cenários em tempo real, calculando lucro e capacidade produtiva dinamicamente.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redux", "Sequelize"],
      imagem: "/img/projeto-alto-flex.png",
      github: "https://github.com/josuesoares64/front-end-autoflex",
      demo: null,
      width: 800,
      height: 450
    },
    {
      id: 2,
      titulo: "SaaS para Barbearia",
      descricao: "Plataforma SaaS com arquitetura multi-tenant para gestão de agendamentos, controle de conflitos de horários em tempo real e API RESTful completa para usuários, serviços e barbearias.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Express.js", "Sequelize", "JWT"],
      imagem: "/img/SaaS-barbearia.png",
      github: "https://github.com/josuesoares64/barbearia_web",
      demo: "https://barbearia-web-mu.vercel.app/barbearia-do-josue",
      width: 800,
      height: 450
    },
    {
      id: 3,
      titulo: "Bella Pizza",
      descricao: "Aplicação fullstack de pedidos com CRUD completo de produtos, sistema de busca com filtros, upload e organização dinâmica de imagens por categoria com persistência no banco de dados.",
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
      imagem: "/img/Projeto-pizzaria.png",
      github: "https://github.com/josuesoares64/pizzaria-web",
      demo: "https://pizzaria-web-drab.vercel.app/",
      width: 800,
      height: 450
    },
    {
      id: 4,
      titulo: "Plataforma Streaming",
      descricao: "Interface de plataforma de streaming desenvolvida com foco em responsividade, componentização e consumo de dados, simulando a experiência de catálogo de conteúdo.",
      stack: ["React", "JavaScript", "CSS3"],
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
          className="text-2xl md:text-3xl text-white font-bold mb-8 text-center"
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
              className="bg-gray-800 bg-opacity-50 rounded-xl overflow-hidden shadow-lg flex flex-col"
            >
              {/* Screenshot */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={projeto.imagem}
                  alt={`Captura de tela do projeto ${projeto.titulo}`}
                  width={projeto.width}
                  height={projeto.height}
                  className="object-cover w-full h-full"
                  sizes="(max-width: 639px) 100vw, 50vw"
                  quality={85}
                  priority={projeto.id === 1}
                />
              </div>

              {/* Card body */}
              <div className="p-5 flex flex-col gap-3 flex-1">

                {/* Título + links */}
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-lg font-semibold text-white leading-snug">
                    {projeto.titulo}
                  </h3>
                  <div className="flex gap-3 shrink-0 mt-1">
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors"
                      aria-label={`Ver código no GitHub — ${projeto.titulo}`}
                    >
                      <SiGithub className="text-xl" />
                    </a>
                    {projeto.demo && (
                      <a
                        href={projeto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-green-400 transition-colors"
                        aria-label={`Ver demonstração ao vivo — ${projeto.titulo}`}
                      >
                        <SlGlobe className="text-xl" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {projeto.descricao}
                </p>

                {/* Stack badges */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {projeto.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 rounded-md bg-gray-700 text-green-400 border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <FormFooter />
    </section>
  );
};

export default SectionProjetos;