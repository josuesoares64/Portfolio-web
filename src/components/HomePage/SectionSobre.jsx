import Image from 'next/image';


const SectionSobre = () => {
  return (
    <section id='SectionSobre' className='h-full p-0 p-6'>
    <div className="p-6 flex flex-col text-center lg:flex-row items-start">
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Sobre Mim</h2>
        <p className="indent-4 mb-3 text-justify">
          Sou Josué, desenvolvedor FullStack com foco em front-end, criando interfaces modernas, responsivas e funcionais. Tenho experiência com HTML, CSS, JavaScript, Python e MySQL, e recentemente venho me especializando em tecnologias como React, Next.js, TypeScript e Tailwind CSS, que me permitem entregar aplicações mais performáticas, organizadas e escaláveis.
        </p>
        <p className="indent-4 mb-3 text-justify">
          Sou formado em Análise e Desenvolvimento de Sistemas e também atuo com boas práticas de SEO e otimização de sites, garantindo melhor desempenho e visibilidade nos mecanismos de busca. Utilizo o Figma para transformar ideias em protótipos funcionais e o GitHub para versionamento e colaboração em equipe.
        </p>
        <p className="indent-4 text-justify">
          Cada projeto é uma oportunidade de ir além. Acredito que a diferença entre o comum e o extraordinário está na atenção aos detalhes e na qualidade da execução — e é isso que busco aplicar em cada linha de código que escrevo.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/img/figurinha_ilustrativa.png"
          alt="Laptop"
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
    </section>
  );
};

export default SectionSobre;
