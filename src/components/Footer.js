import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import '../styles/footer.css'
const Footer = () => {
  return (
    <footer>
      <div className="social-media-links">
        <div>
          <h2>Connect with Me</h2>
          <div className="links">
            <a href="https://wa.me/9381037572" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp size={35} color="green" />
            </a>
            <a href="https://www.instagram.com/sravani_konapalli/profilecard/?igsh=MTU2ZmR4MTR1bXB1dw==" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={35} color="red" />
            </a>
            <a href="https://www.linkedin.com/in/sravani-konapalli-478649238" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={35} color="blue" />
            </a>
            <a href="mailto:konapallisravani@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaEnvelope size={35} color="black" />
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right-text">&copy; 2025 Sravani Konapalli. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
