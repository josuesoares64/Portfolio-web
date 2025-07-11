import { SiFacebook, SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Footer = () => {
    return(
        <footer id="SectionContato" className="w-full bg-neutral-900 py-9">
            <div className="flex justify-center direction-cols gap-4">
                <a className="text-2xl" href="https://wa.me/558881185172"><SiWhatsapp/></a>
                <a className="text-2xl" href="https://www.facebook.com/share/16CAtkDVTT/"><SiFacebook/></a>
                <a className="text-2xl" href="https://github.com/josuesoares64"><SiGithub/></a>
                <a className="text-2xl" href="https://www.instagram.com/josue_soares64?igsh=MWJsd2lqcGZrbmszbg=="><SiInstagram/></a>
                <a className="text-2xl" href="https://www.linkedin.com/in/josu%C3%A9-soares-b32713230/"><SiLinkedin/></a>
            </div>
                <p className="text-center py-4 text-gray-500 text-sm" >© {new Date().getFullYear()} Josué Soares. Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;