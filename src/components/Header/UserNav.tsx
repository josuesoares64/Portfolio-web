interface UserNavProps {
  mobile?: boolean;
  onClose?: () => void;
}

const UserNav = ({ mobile, onClose }: UserNavProps) => {
  return (
    <nav>
      <ul className={`flex ${mobile ? 'flex-col space-y-6' : 'flex-row space-x-6'} items-center`}>
        <li>
          <a
            href="#SectionSobre"
            onClick={onClose}
            className="text-xl uppercase text-white font-bold hover:text-green-300 transition-colors"
          >
            Sobre Mim
          </a>
        </li>
        <li>
          <a
            href="#SectionHabilidade"
            onClick={onClose}
            className="text-xl uppercase text-white font-bold hover:text-green-300 transition-colors"
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            href="#SectionProjetos"
            onClick={onClose}
            className="text-xl uppercase text-white font-bold hover:text-green-300 transition-colors"
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            href="#SectionContato"
            onClick={onClose}
            className="text-xl uppercase text-white font-bold hover:text-green-300 transition-colors"
          >
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;