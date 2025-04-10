import { LuSquareArrowOutUpRight } from "react-icons/lu";
import "../styles/projects.css"; 

const projects = [
  {
    id: 1,
    projectUrl: "https://sfoodmuch.ccbp.tech",
    title: "Food Munch",
    skills: "HTML, CSS, Bootstrap",
    image: "https://i.postimg.cc/SK3PYytV/Screenshot-122.png",
    description: "It is a restaurant app to explore food items and coupons."
  },
  {
    id: 2,
    projectUrl: "https://svinxttrendz.ccbp.tech",
    title: "Nxt Trendz",
    skills: "HTML, CSS, JavaScript, ReactJs",
    image: "https://i.postimg.cc/15rb71f5/Screenshot-118.png",
    description: "Explore products and add them to the cart."
  },
  {
    id: 3,
    projectUrl: "https://dgymtask-word-game.vercel.app",
    title: "Word Game",
    skills: "HTML, CSS, JavaScript",
    image: "https://i.postimg.cc/d0LX07nL/Screenshot-121.png",
    description: "Fun game to find 5-letter words in 6 attempts."
  },
  {
    id: 4,
    projectUrl: "https://interactive-wuiz-app.vercel.app",
    title: "Quiz Game",
    skills: "HTML, CSS, JS",
    image: "https://i.postimg.cc/y69M9ZKR/Screenshot-117.png",
    description: "Quiz with timer, result display, and answer review."
  },
  {
    id: 5,
    projectUrl: "https://recipe-management-app-t8oa.vercel.app",
    title: "Recipe Management App",
    skills: "HTML, CSS, JS, React, Node.js, SQLite, Express.js",
    image: "https://i.postimg.cc/nhdgZK4y/Screenshot-120.png",
    description: "Manage and add different recipes."
  },
  {
    id: 6,
    projectUrl: "https://job-listing-platform-six.vercel.app",
    title: "Job Listing Platform",
    skills: "HTML, CSS, JS, React, Node.js, SQLite, Express.js",
    image: "https://i.postimg.cc/T32FZNDj/Screenshot-119.png",
    description: "Explore jobs; login to add/edit job listings."
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">Recent <span>Projects</span></h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <a
                href={project.projectUrl}
                className="project-overlay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuSquareArrowOutUpRight className="overlay-icon" />
              </a>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
