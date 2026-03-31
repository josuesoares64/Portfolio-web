'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionSobre = () => {
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
            Aprendi front-end do zero, dominei React e Next.js — e escolhi o back-end porque é onde as decisões mais importantes de um produto acontecem. Sou Josué, desenvolvedor Full Stack com foco em back-end, formado em Análise e Desenvolvimento de Sistemas e especializado em Node.js, Express, arquitetura em camadas e APIs REST que sustentam produtos reais.
          </motion.p>

          <motion.p
            variants={item}
            className="text-justify text-white indent-4"
          >
            Trabalho com JavaScript e TypeScript em todo o stack. No back-end, estruturo aplicações em camadas — Router, Controller, Service e Model — com autenticação JWT, integração com PostgreSQL, MySQL e MongoDB, e princípios de Clean Code e SOLID aplicados desde a modelagem. No front-end, domino React e Next.js o suficiente para atuar no ciclo completo da aplicação, entender o produto de ponta a ponta e colaborar sem fricção com qualquer time.
          </motion.p>

          <motion.p
            variants={item}
            className="text-justify text-white indent-4"
          >
            Já construí um sistema ERP com algoritmo de alocação otimizada de recursos e simulação de cenários em tempo real, e uma plataforma SaaS com arquitetura multi-tenant para gestão de agendamentos — projetos desenvolvidos com consistência, mesmo conciliando estudos com uma rotina intensa fora da área. Não busco apenas uma vaga. Estou pronto para contribuir com times que levam produto e código a sério.
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