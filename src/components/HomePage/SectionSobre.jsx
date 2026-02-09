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
Sou Josué, desenvolvedor Full Stack, formado em Análise e Desenvolvimento de Sistemas, com atuação na construção de aplicações web completas, do front-end ao back-end. Trabalho com JavaScript e TypeScript em todo o fluxo da aplicação, desenvolvendo interfaces modernas e APIs REST bem estruturadas, sempre com foco em organização, escalabilidade e qualidade do código.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify text-white indent-4"
      >
No back-end, desenvolvo APIs REST com Node.js e Express, implementando autenticação com JWT, validação de dados e integração com bancos de dados relacionais como PostgreSQL, MySQL e MongoDB. No front-end, crio interfaces responsivas e performáticas com React e Next.js, consumindo essas APIs de forma desacoplada e consistente, garantindo uma integração sólida entre as camadas da aplicação.
      </motion.p>

      <motion.p 
        variants={item}
        className="text-justify text-white indent-4"
      >
        Tenho experiência em projetos orientados a produto, incluindo sistemas e plataformas no modelo SaaS, aplicando organização em camadas, versionamento com Git/GitHub e prototipagem no Figma. Busco entregar soluções completas, fáceis de manter e com potencial real de evolução, contribuindo tanto tecnicamente quanto na construção de produtos digitais que gerem valor para usuários e negócios.
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