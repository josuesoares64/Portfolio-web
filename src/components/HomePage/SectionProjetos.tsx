import { SiGithub } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";

const SectionProjetos = () => {
    return (
        <section className="flex flex-col p-5 m-6 items-center justify-center mb-4 text-center">
            <h2 className="text-2xl font-bold mb-4 mb-8">Projetos</h2>
            <div className="sm:grid sm:grid-cols-2 gap-5">
                <div className="w-50 mb-2">
                    <img src="/img/pokedex.png" alt="Pokedex" className="w-full rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    <div className="flex direction-row gap-4 p-3">
                    <a href="https://https://github.com/josuesoares64/pokedex" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SiGithub className="text-2xl"/>
                    </a>
                    <a href="https://pokedex-cqfa.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SlGlobe className="text-2xl"/>
                    </a>
                    </div>
                </div>
                <div className="w-50 mb-2">
                    <img src="/img/plataforma-streaming.png" alt="Pokedex" className="w-full rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    <div className="flex direction-row gap-4 p-3">
                    <a href="https://github.com/josuesoares64/Plataforma-Streaming" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SiGithub className="text-2xl"/>
                    </a>
                    <a href="https://plataforma-streaming-ecru.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SlGlobe className="text-2xl"/>
                    </a>
                    </div>
                </div>
                <div className="w-50 mb-2">
                    <img src="/img/pagina-advogado.png" alt="Pokedex" className="w-full rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    <div className="flex direction-row gap-4 p-3">
                    <a href="https://github.com/josuesoares64/portfolio-advogado/settings/pages" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SiGithub className="text-2xl"/>
                    </a>
                    <a href="https://josuesoares64.github.io/portfolio-advogado/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SlGlobe className="text-2xl"/>
                    </a>
                    </div>
                </div>
                <div className="w-50 mb-2">
                    <img src="/img/img projeto android.png" alt="Pokedex" className="w-full rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.4)]" />
                    <div className="flex direction-row gap-4 p-3">
                    <a href="https://github.com/josuesoares64/projeto-android" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SiGithub className="text-2xl"/>
                    </a>
                    <a href="https://projeto-android-gules.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        <SlGlobe className="text-2xl"/>
                    </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default SectionProjetos;