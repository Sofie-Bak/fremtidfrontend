import { SiAlienware } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="name">
        <p>©2025</p>
        <p>SofieBak</p>
      </div>
      <div className="footerLogo">
        <SiAlienware />
        <div className="flex">
          <p className="font-thin">fremtid</p>
          <p className="font-black!important">frontend</p>
        </div>
      </div>
      <div className="footerSocials">
        <FaInstagram />
        <FaFacebookF />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
