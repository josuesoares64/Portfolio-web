'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionSobre = () => {
  // Animation configurations
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.5
      }
    }
  };

  return (
    <section id='SectionSobre' className='h-full py-12 md:py-20 lg:px-20 px-6'>
  <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={container}
    className="container mx-auto flex flex-col lg:flex-row items-start gap-8"
  >
    {/* Text content */}
    <motion.div 
      variants={container}
      className="lg:w-1/2 space-y-6"
    >
      <motion.h2 
        variants={item}
        className="text-2xl text-white md:text-3xl font-semibold text-center lg:text-left"
      >
        Sobre Mim
      </motion.h2>

      <motion.p 
        variants={item}
        className="text-justify text-white indent-4"
      >
        Sou Josué, desenvolvedor FullStack com foco em front-end, especializado em criar interfaces modernas, responsivas e de alta performance. Trabalho com HTML, CSS, JavaScript, Python e MySQL, além de frameworks como React, Next.js, TypeScript e Tailwind CSS, desenvolvendo aplicações escaláveis, bem estruturadas e voltadas para a melhor experiência do usuário.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify text-white indent-4"
      >
        Tenho experiência com SEO e otimização, garantindo que os projetos tenham não apenas desempenho técnico, mas também maior visibilidade e alcance nos buscadores. Utilizo o Figma para transformar ideias em protótipos funcionais e o GitHub para versionamento e colaboração eficiente.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify text-white indent-4"
      >
       Mais do que escrever código, meu objetivo é entregar soluções digitais que gerem impacto real — seja contribuindo em times de desenvolvimento, seja ajudando empresas e profissionais a potencializarem seus negócios através da tecnologia.
      </motion.p>
    </motion.div>

    {/* Image */}
    <motion.div 
      variants={imageAnimation}
      className="w-full lg:w-1/2 flex justify-center"
      whileHover={{ 
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative w-full max-w-[400px] aspect-square">
        <Image
          src="/img/figurinha_ilustrativa.png"
          alt="Ilustração estilizada de Josué desenvolvendo em seu computador"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-lg shadow-lg object-cover"
          quality={90}
          priority
        />
      </div>
    </motion.div>
  </motion.div>
</section>
);
};

export default SectionSobre;