'use client';

import { motion, Variants } from 'framer-motion';
import {
  SiCss3,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiPostman
} from 'react-icons/si';

// ==================== ANIMAÇÕES ====================
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  },
  hover: {
    y: -6,
    scale: 1.08,
    transition: { type: 'spring', stiffness: 300 }
  }
};

// ==================== TIPOS ====================
interface Skill {
  icon: React.ReactNode;
  name: string;
  color: string;
}

// ==================== DADOS ====================
const backendSkills: Skill[] = [
  { icon: <SiNodedotjs size={48} />, name: 'Node.js', color: 'hover:text-green-500' },
  { icon: <SiExpress size={48} />, name: 'Express.js', color: 'hover:text-gray-300' },
  { icon: <SiSequelize size={48} />, name: 'Sequelize', color: 'hover:text-blue-400' },
  { icon: <SiJsonwebtokens size={48} />, name: 'JWT', color: 'hover:text-pink-400' },
  { icon: <SiTypescript size={48} />, name: 'TypeScript', color: 'hover:text-blue-400' },
  { icon: <SiMongodb size={48} />, name: 'MongoDB', color: 'hover:text-green-400' },
  { icon: <SiPostman size={48} />, name: 'Postman', color: 'hover:text-orange-400' },
];

const frontendSkills: Skill[] = [
  { icon: <SiHtml5 size={48} />, name: 'HTML5', color: 'hover:text-orange-500' },
  { icon: <SiCss3 size={48} />, name: 'CSS3', color: 'hover:text-blue-500' },
  { icon: <SiJavascript size={48} />, name: 'JavaScript', color: 'hover:text-yellow-400' },
  { icon: <SiTypescript size={48} />, name: 'TypeScript', color: 'hover:text-blue-400' },
  { icon: <SiReact size={48} />, name: 'React', color: 'hover:text-sky-400' },
  { icon: <SiNextdotjs size={48} />, name: 'Next.js', color: 'hover:text-white' },
  { icon: <SiTailwindcss size={48} />, name: 'Tailwind CSS', color: 'hover:text-cyan-400' },
];

const databaseAndTools: Skill[] = [
  { icon: <SiPostgresql size={48} />, name: 'PostgreSQL', color: 'hover:text-blue-400' },
  { icon: <SiMysql size={48} />, name: 'MySQL', color: 'hover:text-blue-500' },
  { icon: <SiGit size={48} />, name: 'Git', color: 'hover:text-orange-500' },
  { icon: <SiGithub size={48} />, name: 'GitHub', color: 'hover:text-gray-300' },
];

// ==================== COMPONENTE ====================
const SectionHabilidades = () => {
  const renderSkills = (skills: Skill[]) => (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center"
    >
      {skills.map((skill, index) => (
        <motion.li
          key={index}
          variants={itemVariants}
          whileHover="hover"
          className={`flex flex-col items-center gap-2 p-4 text-gray-400 transition-colors duration-300 ${skill.color}`}
        >
          {skill.icon}
          <span className="text-xs font-medium text-gray-400 text-center leading-tight">
            {skill.name}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );

  return (
    <section
      id="SectionHabilidade"
      className="w-full flex justify-center py-16 text-white"
    >
      <div className="max-w-6xl w-full px-4 text-center">
        <h2 className="text-3xl font-semibold mb-12">Habilidades</h2>

        <div className="space-y-14">
          <div>
            <h3 className="text-xl font-medium mb-6 text-green-400">
              Back-end
            </h3>
            {renderSkills(backendSkills)}
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6 text-blue-400">
              Front-end
            </h3>
            {renderSkills(frontendSkills)}
          </div>

          <div>
            <h3 className="text-xl font-medium mb-6 text-purple-400">
              Banco de Dados & Ferramentas
            </h3>
            {renderSkills(databaseAndTools)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHabilidades;