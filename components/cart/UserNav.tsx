const UserNav = () => {
    return (
        <nav>
            <ul className="flex gap-4 md:gap-1 md:text-red-500">
                <li><a href="#sobre" className="text-white text-1xl uppercase font-bold p-1 ">Sobre Mim</a></li>
                <li><a href="#habilidade" className="text-white text-1xl uppercase font-bold p-1 ">Habilidade</a></li>
                <li><a href="#projetos" className="text-white text-1xl uppercase font-bold p-1 ">Projetos</a></li>
                <li><a href="#contato" className="text-white text-1xl uppercase font-bold p-1 ">Contato</a></li>
            </ul>
        </nav>
    )
}

export default UserNav;