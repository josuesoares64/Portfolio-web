import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiWhatsapp,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 py-9">
     
      <div className="flex justify-center direction-cols gap-4">
        <a
          className="text-2xl text-white"
          href="https://wa.me/558881185172"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp />
        </a>
        <a
          className="text-2xl text-white"
          href="https://www.facebook.com/share/16CAtkDVTT/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiFacebook />
        </a>
        <a
          className="text-2xl text-white"
          href="https://github.com/josuesoares64"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
        <a
          className="text-2xl text-white"
          href="https://www.instagram.com/josue_soares64?igsh=MWJsd2lqcGZrbmszbg=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiInstagram />
        </a>
        <a
          className="text-2xl text-white"
          href="https://www.linkedin.com/in/josu%C3%A9-soares-b32713230/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
      </div>
      <p className="text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Josué Soares. Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
