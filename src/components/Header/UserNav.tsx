interface UserNavProps {
  mobile?: boolean;
}

const UserNav = ({ mobile }: UserNavProps) => {
  return (
    <nav>
      <ul className={`flex ${mobile ? 'flex-col space-y-6' : 'flex-row space-x-6'} items-center`}>
        <li>
          <a
            href="#SectionSobre"
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
          >
            Sobre Mim
          </a>
        </li>
        <li>
          <a
            href="#SectionHabilidade"
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            href="#SectionProjetos"
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#SectionContato"
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
