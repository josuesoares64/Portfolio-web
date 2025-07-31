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
        className="text-2xl md:text-3xl font-semibold text-center lg:text-left"
      >
        Sobre Mim
      </motion.h2>

      <motion.p 
        variants={item}
        className="text-justify indent-4"
      >
        Sou Josué, desenvolvedor FullStack com foco em front-end, criando interfaces modernas, responsivas e funcionais. Tenho experiência com HTML, CSS, JavaScript, Python e MySQL, e recentemente venho me especializando em tecnologias como React, Next.js, TypeScript e Tailwind CSS, que me permitem entregar aplicações mais performáticas, organizadas e escaláveis.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify indent-4"
      >
        Sou formado em Análise e Desenvolvimento de Sistemas e também atuo com boas práticas de SEO e otimização de sites, garantindo melhor desempenho e visibilidade nos mecanismos de busca. Utilizo o Figma para transformar ideias em protótipos funcionais e o GitHub para versionamento e colaboração em equipe.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify indent-4"
      >
        Cada projeto é uma oportunidade de ir além. Acredito que a diferença entre o comum e o extraordinário está na atenção aos detalhes e na qualidade da execução — e é isso que busco aplicar em cada linha de código que escrevo.
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