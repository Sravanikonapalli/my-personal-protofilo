import '../styles/aboutme.css';
const AboutMe=()=>{
    return (
        
        <div id="aboutme">
            <div className="image">
                    <img src="https://i.postimg.cc/SNNS6Zrc/Whats-App-Image-2025-01-08-at-13-55-57-f1245910.jpg" alt="pic"/>
            </div>
            <div className="content">
                <h1>MY <span>STORY</span></h1>
                <p>As a recent graduate in Computer Applications and a trained Full-Stack Developer, 
                    I've had the privilege of working on a wide range of projects, from small business websites 
                    to complex enterprise applications. With each project, I've learned something new and 
                    expanded my skill set, leveraging my knowledge of both frontend and backend technologies.
                    <br/><br/>
                    As a frontend developer, I'm passionate about crafting responsive, accessible, and visually 
                    stunning web applications that deliver seamless user experiences. With a strong foundation in 
                    HTML, CSS, JavaScript, and modern frontend frameworks, I'm committed to staying up-to-date with 
                    the latest industry trends and best practices.
                    <br/>
                    <br/>
                    In addition to my frontend expertise, I've also gained valuable experience in backend 
                    technologies, including server-side programming languages, databases, and APIs. This 
                    full-stack perspective enables me to approach projects with a holistic understanding of the 
                    entire web development ecosystem.
                </p>
                <a 
                    href="https://drive.google.com/file/d/1bUKL7IeGvBuv8MJC9aQhjMTHnB5I7o9d/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button>View Resume</button>
                </a>                
            </div>
                
        </div>
    )
}

export default AboutMe;