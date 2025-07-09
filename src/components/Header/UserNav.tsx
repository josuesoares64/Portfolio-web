const UserNav = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <li>
          <a href="#sobre" className="text-white text-xl uppercase font-bold p-1">
            Sobre Mim
          </a>
        </li>
        <li>
          <a href="#habilidade" className="text-white text-xl uppercase font-bold p-1">
            Habilidade
          </a>
        </li>
        <li>
          <a href="#projetos" className="text-white text-xl uppercase font-bold p-1">
            Projetos
          </a>
        </li>
        <li>
          <a href="#contato" className="text-white text-xl uppercase font-bold p-1">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
