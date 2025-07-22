import Link from "next/link";

interface UserNavProps {
  mobile?: boolean;
}

const UserNav = ({ mobile }: UserNavProps) => {
  return (
    <nav>
      <ul className={`flex ${mobile ? 'flex-col space-y-6' : 'flex-row space-x-6'} items-center`}>
        <li>
          <Link 
            href="#SectionSobre" 
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
            scroll={false}
          >
            Sobre Mim
          </Link>
        </li>
        <li>
          <Link 
            href="#SectionHabilidade" 
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
            scroll={false}
          >
            Habilidades
          </Link>
        </li>
        <li>
          <Link 
            href="#SectionProjetos" 
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
            scroll={false}
          >
            Projetos
          </Link>
        </li>
        <li>
          <Link 
            href="#SectionContato" 
            className="text-white text-xl uppercase font-bold hover:text-green-300 transition-colors"
            scroll={false}
          >
            Contato
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;