'use client';

import { motion } from 'framer-motion';
import { SiCss3, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const SectionHabilidades = () => {
  // Configuração das animações
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  const skills = [
    { icon: <SiHtml5 />, name: "HTML5", color: "hover:text-orange-500" },
    { icon: <SiCss3 />, name: "CSS3", color: "hover:text-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "hover:text-cyan-400" },
    { icon: <SiJavascript />, name: "JavaScript", color: "hover:text-yellow-400" },
    { icon: <SiTypescript />, name: "TypeScript", color: "hover:text-blue-600" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-black dark:hover:text-white" },
    { icon: <SiReact />, name: "React", color: "hover:text-blue-400" },
    { icon: <SiPython />, name: "Python", color: "hover:text-blue-700" },
    { icon: <SiMysql />, name: "MySQL", color: "hover:text-blue-800" },
    { icon: <SiGithub />, name: "GitHub", color: "hover:text-gray-800 dark:hover:text-gray-200" },
    { icon: <SiGit />, name: "Git", color: "hover:text-orange-600" },
    { icon: <SiFigma />, name: "Figma", color: "hover:text-purple-500" }
  ];

  return (
    <section id="SectionHabilidade" className="w-full flex justify-center py-12 md:py-20">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="text-center p-4 max-w-7xl"
      >
        <motion.h2 
          variants={item}
          className="text-2xl md:text-3xl font-semibold mb-8 md:mb-12"
        >
          Habilidades
        </motion.h2>

        <motion.ul 
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 justify-items-center"
        >
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`text-7xl sm:text-8xl p-4 transition-colors duration-300 ${skill.color}`}
              title={skill.name}
            >
              {skill.icon}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default SectionHabilidades;