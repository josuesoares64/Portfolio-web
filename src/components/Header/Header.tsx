import Link from "next/link";
import UserNav from "./UserNav";

const Header = () => {
    return (
    <header className="flex shadow-xl/30 shadow-green-300/50 bg-green-800 bg-opacity-5 fixed w-full py-6 px-4 justify-between">
    <Link href='/'>
        <h1 className="text-white font-bold uppercase text-2xl">Josué Soares</h1>
    </Link>
    <UserNav />
    </header>
    )
}

export default Header;