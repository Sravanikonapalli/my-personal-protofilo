import '../styles/home.css';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <div className="home-text">
          <h1>Hello, This is <span>Sravani Konapalli</span></h1>
          <p className="paragraph">
            A passionate frontend developer dedicated to delivering exceptional digital experiences.
            With expertise in HTML, CSS, JavaScript, and more, I'll help you transform your ideas into
            engaging, interactive web applications. Explore my portfolio and let's get started!
          </p>
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
                    <FaEnvelope size={35} color="wheat" />
                </a>
                <a href='https://github.com/Sravanikonapalli' target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FiGithub size={35} color="black" />
                </a>
        </div>
        </div>
        
        <div className="home-image-wrapper">
          <img
            src="https://i.postimg.cc/pTmj9vnW/pic1.jpg"
            alt="mypic"
            className="home-pic"
          />
        </div>
      </div>
      <div className="zigzag-divider"></div>
    </div>
  );
};

export default Home;
