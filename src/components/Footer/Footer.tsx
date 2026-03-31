import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0d1117] border-t border-gray-800 py-9">

      <div className="flex justify-center gap-6">
        <a
          className="text-2xl text-gray-500 hover:text-green-400 transition-colors duration-300"
          href="https://wa.me/558881185172"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <SiWhatsapp />
        </a>
        <a
          className="text-2xl text-gray-500 hover:text-blue-500 transition-colors duration-300"
          href="https://www.facebook.com/share/16CAtkDVTT/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <SiFacebook />
        </a>
        <a
          className="text-2xl text-gray-500 hover:text-white transition-colors duration-300"
          href="https://github.com/josuesoares64"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <SiGithub />
        </a>
        <a
          className="text-2xl text-gray-500 hover:text-pink-500 transition-colors duration-300"
          href="https://www.instagram.com/josue_soares64?igsh=MWJsd2lqcGZrbmszbg=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <SiInstagram />
        </a>
        <a
          className="text-2xl text-gray-500 hover:text-blue-400 transition-colors duration-300"
          href="https://www.linkedin.com/in/josu%C3%A9-soares-b32713230/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <SiLinkedin />
        </a>
      </div>

      <p className="text-center pt-5 text-gray-600 text-xs">
        © {new Date().getFullYear()} Josué Soares. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;