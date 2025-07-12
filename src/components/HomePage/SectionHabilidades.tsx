import { SiCss3, SiFigma, SiGit, SiGithub, SiHtml5, SiJavascript, SiMysql, SiNextdotjs, SiPython, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";

const SectionHabilidades = () => {
    return (
        <section id="SectionHabilidade" className="w-full flex justify-center h-full">
            <div className="text-center p-4 max-w-7xl">
                <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
                <ul className="grid sm:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-x-10 gap-y-3 sm:gap-y-7 justify-items-center">
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiHtml5 /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiCss3 /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiTailwindcss /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiJavascript /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiTypescript /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiNextdotjs /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiReact /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiPython /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiMysql /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiGithub /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiGit /></li>
                    <li className="lg:text-10xl text-7xl sm:text-8xl sm:w-3xs justify-items-center p-4"><SiFigma /></li>
                </ul>
            </div>
        </section>
    );
};

export default SectionHabilidades;